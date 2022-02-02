import Home, { HomeTemplateProps } from '../templates/Home';
import { GetServerSideProps } from 'next';

import { getComics } from '../hooks/useComics';
import { params } from '../utils/serverRequestParams';

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { ts, hash } = params;

  const { total, count, results } = await getComics(1, {
    ts,
    hash,
  });

  return {
    props: {
      total,
      count,
      results,
    }
  }
}