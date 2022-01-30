import { useRouter } from 'next/router';
import { useCart } from '../../hooks/useCart';
import { Comic } from '../../types';
import { Container } from './styles';

type ComicResultItemProps = {
  comic: Comic;
  rare?: boolean;
}

export function ComicResultItem({ comic, rare = false }: ComicResultItemProps) {
  const { cart, handleAddComicToCart, handleRemoveComicFromCart } = useCart();

  const router = useRouter();

  async function handleBuy(comicId: number) {
    await handleAddComicToCart(comicId);

    router.push('/cart');
  }

  return (
    <Container isAlreadyAddedToCart={cart.some(item => item.id === comic.id)}>
      <div className="item-cover">
        <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt={comic.title} />
      </div>
      <div className="item-details">
        <div className="item-info">
          <strong>{comic.title}</strong>
          <p>2021</p>
          { rare && (
            <span>
              <strong>RARO</strong>
            </span>
          ) }
          <p>${comic.prices[0].price.toFixed(2)}</p>
        </div>
        <div className='item-actions'>
          {!cart.some(item => item.id === comic.id) && (
            <button onClick={() => handleBuy(comic.id)}>
              Comprar
            </button>
          )}
          
          { cart.some(item => item.id === comic.id) ? (
            <button onClick={() => handleRemoveComicFromCart(comic.id)}>
              Remover do carrinho
            </button>  
          ) : (
            <button onClick={() => handleAddComicToCart(comic.id)}>
              Adicionar ao carrinho
            </button>
          ) }
        </div>
      </div>
    </Container>
  )
}