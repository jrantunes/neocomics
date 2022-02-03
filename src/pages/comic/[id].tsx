import ComicTemplate, { ComicPageProps } from '../../templates/Comic';
import { api } from '../../services/api';
import { GetStaticProps, GetStaticPaths } from 'next';

import { ApiResponse, Comic } from '../../types';

import { getRequestParams } from '../../utils/serverRequestParams';

export default function ComicPage(props: ComicPageProps) {
  return <ComicTemplate {...props} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params;

  const { data } = await api.get<{ data: ApiResponse }>(`/comics/${id}`, {
    params: getRequestParams(new Date()),
  });

  const { results } = data.data;

  const [ comic ]: Comic[] = results.map(result => {
    return {
      id: result.id,
      title: result.title,
      description: result.description || result.textObjects[0]?.text || '<strong>Sem descrição</strong>',
      prices: result.prices,
      thumbnail: result.thumbnail,
    }
  });

  const creators = results[0].creators.items.map(creator => `${creator.name} - ${creator.role}`);

  return {
    props: {
      comic,
      creators
    },
    revalidate: 60 * 60 * 24 * 7, // 7 dias
  }
}