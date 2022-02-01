import { useEffect, useState } from 'react';

import { ComicResultItem } from '../../components/ComicResultItem';
import { Container, Content } from './styles';
import { FloatingCartButton } from '../../components/FloatingCartButton';

import { Comic } from '../../types';

export type HomeTemplateProps = {
  total: number;
  count: number;
  results: Comic[];
}

export default function Home({ results, count }: HomeTemplateProps) {
  const [rareComics, setRareComics] = useState([]);

  return (
    <Container>
      <Content>
        <h1>Lista de quadrinhos</h1>

        <ul>
          {results.map(comic => (
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