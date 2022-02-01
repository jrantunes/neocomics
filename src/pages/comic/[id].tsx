import { GetStaticProps, GetStaticPaths } from 'next';

import { api } from '../../services/api';
import { params as requestParams } from '../../utils/serverRequestParams';

import { Comic } from '../../types';
import { HomeTemplateProps } from '../../templates/Home';

import { Container, Content } from './styles';
import { CartButton } from '../../components/CartButton';
import { useCart } from '../../hooks/useCart';
import { FloatingCartButton } from '../../components/FloatingCartButton';

type ComicPageProps = {
  comic: Comic;
  creators: string[];
}

export default function ComicPage({ comic, creators }: ComicPageProps) {
  const { cart } = useCart();
 
  return (
    <Container>

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

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params;

  const { data } = await api.get<{ data: HomeTemplateProps }>(`/comics/${id}`, {
    params: requestParams,
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