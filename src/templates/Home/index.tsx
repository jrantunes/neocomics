import { useEffect, useState } from 'react';

import { Container, Content } from './styles';
import { ListItem } from '../../components/ListItem';
import { FloatingCartButton } from '../../components/FloatingCartButton';

import { Comic } from '../../types';

export type HomeTemplateProps = {
  total: number;
  count: number;
  results: Comic[];
}

export default function Home({ results, count }: HomeTemplateProps) {
  const [rareComics, setRareComics] = useState([]);


  useEffect(() => {
    const shuffledResults = [...results].sort(() => 0.5 - Math.random());

    const rareComicsIds = shuffledResults.map(result => result.id);

    setRareComics(rareComicsIds.slice(0, 0.1 * count));
  }, [count, results]);

  return (
    <Container>
      <Content>
        <h1>Lista de quadrinhos</h1>

        <ul>
          {results.map(comic => (
            <ListItem 
              key={comic.id} 
              comic={comic} 
              rare={rareComics.includes(comic.id)} 
            />
          ))}
        </ul>

      </Content>

      <FloatingCartButton />
    </Container>
  )
}