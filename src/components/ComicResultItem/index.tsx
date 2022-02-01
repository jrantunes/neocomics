import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCart } from '../../hooks/useCart';
import { Comic } from '../../types';
import { CartButton } from '../CartButton';
import { Container } from './styles';

type ComicResultItemProps = {
  comic: Comic;
}

export function ComicResultItem({ comic }: ComicResultItemProps) {
  const { cart, handleAddComicToCart } = useCart();

  const router = useRouter();

  async function handleBuy(comicId: number, rare: boolean) {
    await handleAddComicToCart(comicId, rare);

    router.push('/cart');
  }

  return (
    <Container isAlreadyAddedToCart={cart.some(item => item.id === comic.id)}>
      <div className="item-cover">
        <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt={comic.title} />
      </div>
      <div className="item-details">
        <div className="item-info">
          <Link href={`/comic/${comic.id}`} passHref>
            <strong>{comic.title}</strong>
          </Link>
          <p>2021</p>
          { comic.rare && (
            <span>
              <strong>RARO</strong>
            </span>
          ) }
          <p>${comic.prices[0].price.toFixed(2)}</p>
        </div>
        <div className='item-actions'>
          {!cart.some(item => item.id === comic.id) && (
            <button onClick={() => handleBuy(comic.id, comic.rare)}>
              Comprar
            </button>
          )}          
        
          <CartButton alreadyInCart={cart.some(item => item.id === comic.id)} comicId={comic.id} rare={comic.rare} />
        </div>
      </div>
    </Container>
  )
}