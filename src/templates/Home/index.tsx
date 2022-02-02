import Image from 'next/image';
import ClipLoader from 'react-spinners/ClipLoader';
import { ComicResultItem } from '../../components/ComicResultItem';
import { Container, Banner, Content } from './styles';
import { FloatingCartButton } from '../../components/FloatingCartButton';

import { Comic } from '../../types';
import { useComics } from '../../hooks/useComics';

import bannerImg from '../../assets/images/banner-img.jpg';
import { Pagination } from '../../components/Pagination';
import { useEffect, useRef, useState } from 'react';

export type HomeTemplateProps = {
  total: number;
  count: number;
  results: Comic[];
}

export default function Home({ total, count, results }: HomeTemplateProps) {
  const [currentPage, setCurrentPage] = useState(1);
  
  const { data, isFetching } = useComics(currentPage, {
    placeholderData: {
      total,
      count,
      results,
    },
  });

  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const storagedCurrentPage = localStorage.getItem('@neocomics:currentPage');

    if (storagedCurrentPage) {
      setCurrentPage(Number(storagedCurrentPage))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('@neocomics:currentPage', String(currentPage));
  }, [currentPage])

  useEffect(() => {
    bannerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [currentPage])

  return (
    <Container>
      <Content>
        <Banner ref={bannerRef}>
          <h1>Encontre aqui os seus quadrinhos favoritos no MELHOR PREÇO!</h1>
          <div className="image">
            <Image src={bannerImg} alt="Banner image" />
          </div>
        </Banner>
        <h1>Lista de quadrinhos</h1>
        
        {isFetching ? (
          <div style={{ margin: '0 auto' }}>
            <ClipLoader color='#e7e7e7' size={60} loading={isFetching}/>
          </div>
        ) : (
          <ul>
            {data.results.map(comic => (
              <ComicResultItem 
                key={comic.id} 
                comic={comic} 
              />
            ))}
          </ul>
        )}
        
        {!isFetching && (
          <Pagination
            totalCount={data.total}
            currentPage={currentPage}
            onPageChange={setCurrentPage} 
          />
        )}
      </Content>

      <FloatingCartButton />
    </Container>
  )
}