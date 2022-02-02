import { useQuery} from "react-query";
import { api } from "../services/api";

import { Comic } from "../types";

import { params as requestParams } from "../utils/serverRequestParams";

export type GetComicsResponse = {
  total: number;
  count: number;
  results: Comic[];
}

const { apikey } = requestParams;

export async function getComics(page: number, optionalParams?: object): Promise<GetComicsResponse> {
  const { data } = await api.get('/comics', {
    params: {
      offset: (page - 1) * 20,
      apikey,
      ...optionalParams,
    },
  });

  const { total, count, results } = data.data as GetComicsResponse;

  const shuffledResults = [...results].sort(() => 0.5 - Math.random());

  const rareComicsIds = shuffledResults.map(result => result.id).slice(0, 2);

  const comics: Comic[] = results.map(result => {
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
    total,
    count, 
    results: comics,
  }
}

export function useComics<GetComicsResponse, Error, UseQueryOptions>(currentPage: number, options?: UseQueryOptions) {
  return useQuery(['comics', currentPage], () => getComics(currentPage), {
    ...options,
    staleTime: 1000 * 60 * 60 * 24 * 7, // 7 dias
  });
}