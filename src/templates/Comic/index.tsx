import Head from 'next/head';
import { useCart } from '../../hooks/useCart';

import { Comic } from '../../types';

import { Container, Content } from './styles';
import { FloatingCartButton } from '../../components/FloatingCartButton';
import { CartButton } from '../../components/CartButton';

export type ComicPageProps = {
  comic: Comic;
  creators: string[];
}

export default function ComicPage({ comic, creators }: ComicPageProps) {
  const { cart } = useCart();
 
  return (
    <Container>
      <Head>
        <title>NEOCOMICS | {comic.title}</title>
      </Head>
      <Content>
        <div>
          <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt={comic.title} />
        </div>
          
        <section>
          <h1>{comic.title}</h1>
          {comic.description === '#N/A' ? (
            <strong>Sem descrição</strong>
          ) : (
            <p dangerouslySetInnerHTML={{ __html: comic.description }} />
          )}
          <div>
            <strong>Criadores: </strong>
            <ul>
              {creators.map(creator => (
                <li key={creator}>
                  <p>{creator}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <strong>
              {comic.prices[0].price.toFixed(2)}
              <span>$</span>
            </strong>
            <CartButton alreadyInCart={cart.some(item => item.id === comic.id)} comicId={comic.id} />
          </div>
        </section>
      </Content>

      <FloatingCartButton />
    </Container>
  );
}
