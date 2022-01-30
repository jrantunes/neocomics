import { useCart } from '../../hooks/useCart';
import { Comic } from '../../types';
import { Container } from './styles';

type ListItemProps = {
  comic: Comic;
  rare?: boolean;
}

export function ListItem({ comic, rare = false }: ListItemProps) {
  const { cart, addComic, removeComic } = useCart();

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
          <button>Comprar</button>
          { cart.some(item => item.id === comic.id) ? (
            <button onClick={() => removeComic(comic.id)}>
              Remover do carrinho
            </button>  
          ) : (
            <button onClick={() => addComic(comic.id)}>
              Adicionar ao carrinho
            </button>
          ) }
        </div>
      </div>
    </Container>
  )
}