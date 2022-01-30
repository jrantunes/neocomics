import { useEffect, useState } from 'react';
import { useCart } from '../../hooks/useCart';
import { Comic } from '../../types';
import { Container } from './styles';

type ListItemProps = {
  comic: Comic;
  rare?: boolean;
  addComic: (comicId: number) => void;
}

export function ListItem({ comic, rare = false, addComic }: ListItemProps) {
  const [isAlreadyAddedToCart, setIsAlreadyAddedToCart] = useState(false);

  const { cart } = useCart();

  useEffect(() => {
    const itemAlreadyAdded = cart.some(item => item.id === comic.id);
  
    if (itemAlreadyAdded) {
      setIsAlreadyAddedToCart(true);
    }
  }, [cart, comic.id])

  return (
    <Container isAlreadyAddedToCart={isAlreadyAddedToCart}>
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
          <button>Comprar</button>
          <button onClick={() => addComic(comic.id)}>
            { isAlreadyAddedToCart 
              ? 'Remover do' 
              : 'Adicionar ao' } carrinho
          </button>
        </div>
      </div>
    </Container>
  )
}