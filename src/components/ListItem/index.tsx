import { Container } from './styles';

type ListItemProps = {
  comic: {
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
  rare?: boolean;
}

export function ListItem({ comic, rare = false }: ListItemProps) {
  return (
    <Container>
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
          <button>
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    </Container>
  )
}