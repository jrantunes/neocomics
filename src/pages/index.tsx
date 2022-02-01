import Home, { HomeTemplateProps } from '../templates/Home';
import { GetServerSideProps } from 'next';

import { getComics } from '../hooks/useComics';

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { total, count, results } = await getComics();

  return {
    props: {
      total,
      count,
      results,
    }
  }
}