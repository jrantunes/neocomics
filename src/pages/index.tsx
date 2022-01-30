import Home, { HomeTemplateProps } from '../templates/Home';
import md5 from 'js-md5';

import { GetServerSideProps } from 'next';
import { api } from '../services/api';

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export const getServerSideProps: GetServerSideProps = async () => {
  const publicKey = process.env.NEXT_PUBLIC_MARVEL_API_PUBLIC_KEY;
  const privateKey = process.env.MARVEL_API_PRIVATE_KEY;
  
  const ts = Number(new Date());
  const hash = md5.create();
  hash.update(ts + privateKey + publicKey);
  
  const { data } = await api.get<{ data: HomeTemplateProps }>('/comics', {
    params: {
      ts,
      apikey: publicKey,
      hash: hash.toString().toLowerCase(),
    }
  });
  
  const { total, count, results } = data.data;

  const comicsData = results.map(result => {
    return {
      id: result.id,
      title: result.title,
      description: result.description,
      prices: result.prices,
      thumbnail: result.thumbnail,
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