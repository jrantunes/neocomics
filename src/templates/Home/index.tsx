import Image from 'next/image';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useComics } from '../../hooks/useComics';

import ClipLoader from 'react-spinners/ClipLoader';
import { Container, Banner, Content } from './styles';
import { ComicResultItem } from '../../components/ComicResultItem';
import { FloatingCartButton } from '../../components/FloatingCartButton';
import { Pagination } from '../../components/Pagination';

import { ApiResponse } from '../../types';

import bannerImg from '../../assets/images/banner-img.jpg';


export default function Home({ results, total, count }: ApiResponse) {
  const [currentPage, setCurrentPage] = useState(1);
  
  const { data, isFetching } = useComics(currentPage, {
    placeholderData: {
      results,
      total,
      count,
    }
  });

  useEffect(() => {
    const storagedCurrentPage = localStorage.getItem('@neocomics:currentPage');

    if (storagedCurrentPage) {
      setCurrentPage(Number(storagedCurrentPage))
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('@neocomics:currentPage', String(currentPage));
    
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <Container>
      <Head>
        <title>NEOCOMICS | Página inicial</title>
      </Head>
      <Content>
        <Banner>
          <h1>Encontre aqui os seus quadrinhos favoritos no MELHOR PREÇO!</h1>
          <div className='image'>
            <Image src={bannerImg} alt='Ilustração do banner' />
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