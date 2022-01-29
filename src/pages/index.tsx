import Home, { HomeTemplateProps } from '../templates/Home';
import { GetServerSideProps } from 'next';
import { api } from '../services/api';

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await api.get('/comics');
  
  const { total, count, results } = data.data;

  return {
    props: {
      total,
      count,
      results
    }
  }
}