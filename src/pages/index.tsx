import Home from '../templates/Home';
import { GetServerSideProps } from 'next';
import { getComics } from '../hooks/useComics';

import { ApiResponse } from '../types';
import { getRequestParams } from '../utils/serverRequestParams';

export default function Index(props: ApiResponse) {
  return <Home {...props} />
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { ts, hash } = getRequestParams(new Date());

  const { results, total, count } = await getComics(1, {
    ts,
    hash
  });

  return {
    props: {
      results,
      total,
      count,
    }
  }
}