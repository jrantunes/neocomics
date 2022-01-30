import { Container, Content } from './styles';
import { useEffect, useState } from 'react';

import { Header } from '../../components/Header';
import { ListItem } from '../../components/ListItem';
import { Comic } from '../../types';
import { useCart } from '../../hooks/useCart';
import { ToastContainer } from 'react-toastify';

export type HomeTemplateProps = {
  total: number;
  count: number;
  results: Comic[];
}

export default function Home({ results, count }: HomeTemplateProps) {
  const [rareComics, setRareComics] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);

  const { cart, addComic } = useCart();

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  useEffect(() => {
    const shuffledResults = [...results].sort(() => 0.5 - Math.random());

    const rareComicsIds = shuffledResults.map(result => result.id);

    setRareComics(rareComicsIds.slice(0, 0.1 * count));
  }, [count, results]);
  
  function handleScroll() {
    const position = window.pageYOffset;
    setScrollPosition(position);
  }

  return (
    <Container>
      <Header 
        scrollPosition={scrollPosition} 
      />
      <ToastContainer autoClose={2000} theme='colored' />
      <Content>
        <h1>Lista de quadrinhos</h1>

        <ul>
          {results.map(comic => (
            <ListItem 
              key={comic.id} 
              comic={comic} 
              rare={rareComics.includes(comic.id)} 
              addComic={addComic}
            />
          ))}
        </ul>
      </Content>
    </Container>
  )
}