import Home, { HomeTemplateProps } from '../templates/Home';
import { GetServerSideProps } from 'next';

import { params } from '../utils/serverRequestParams';
import { api } from '../services/api';
import { Comic } from '../types';

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export const getServerSideProps: GetServerSideProps = async () => {
  
  const { data } = await api.get<{ data: HomeTemplateProps }>('/comics', {
    params: {
      ...params,
      format: 'comic',
      formatType: 'comic',
      noVariants: true,
    }
  });
  
  const { total, count, results } = data.data;

  const shuffledResults = [...results].sort(() => 0.5 - Math.random());

  const rareComicsIds = shuffledResults.map(result => result.id).slice(0, 2);

  const comicsData: Comic[] = results.map(result => {
    return {
      id: result.id,
      title: result.title,
      description: result.description,
      prices: result.prices,
      thumbnail: result.thumbnail,
      rare: rareComicsIds.includes(result.id),
    }
  });

  return {
    props: {
      total,
      count,
      results: [ ...comicsData ]
    }
  }
}