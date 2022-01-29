import { Container, Content } from './styles';
import { useEffect, useState } from 'react';

import { Header } from '../../components/Header';
import { ListItem } from '../../components/ListItem';


type Comic = {
  id: number;
  title: string;
  description: string;
  prices: Array<{
    price: number;
  }>;
  thumbnail: {
    path: string;
    extension: string;
  }
}

export type HomeTemplateProps = {
  total: number;
  count: number;
  results: Comic[];
}

export default function Home({ results, count }: HomeTemplateProps) {
  const [rareComics, setRareComics] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);
  
  function handleScroll() {
    const position = window.pageYOffset;
    setScrollPosition(position);
  }

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
  }, [count, results])

  return (
    <Container>
      <Header 
        scrollPosition={scrollPosition} 
      />
      <Content>
        <h1>Lista de quadrinhos</h1>

        <ul>
          {results.map(comic => (
            <ListItem key={comic.id} comic={comic} rare={rareComics.includes(comic.id)} />
          ))}
        </ul>
      </Content>
    </Container>
  )
}