import { ComicResultItem } from '../../components/ComicResultItem';
import { Container, Banner, Content } from './styles';
import { FloatingCartButton } from '../../components/FloatingCartButton';

import { Comic } from '../../types';
import { useComics } from '../../hooks/useComics';

import bannerImg from '../../assets/images/banner-img.jpg';
import Image from 'next/image';

export type HomeTemplateProps = {
  total: number;
  count: number;
  results: Comic[];
}

export default function Home({ total, count, results }: HomeTemplateProps) {
  const { data, isLoading, isFetching, error } = useComics({
    initialData: {
      total,
      count,
      results,
    }
  });

  return (
    <Container>
      <Content>
        <Banner>
          <h1>Encontre aqui os seus quadrinhos favoritos no MELHOR PREÇO!</h1>
          <div className="image">
            <Image src={bannerImg} alt="Banner image" />
          </div>
        </Banner>
        <h1>Lista de quadrinhos</h1>

        <ul>
          {data.results.map(comic => (
            <ComicResultItem 
              key={comic.id} 
              comic={comic} 
            />
          ))}
        </ul>

      </Content>

      <FloatingCartButton />
    </Container>
  )
}