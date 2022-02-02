import { useCart } from '../../hooks/useCart';

import { Comic } from '../../types';

import { Container, SelectContainer, RemoveButton } from './styles';
import { BsTrashFill } from 'react-icons/bs';

type CartComicItemProps = {
  comic: Comic;
}

export function CartComicItem({ comic }: CartComicItemProps) {
  const { handleRemoveComicFromCart, handleIncreaseComicAmount } = useCart();

  return (
    <Container>
      <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt={comic.title} />
      <div>
        <strong>{comic.title}</strong>
        <SelectContainer>
          <strong>Quantidade:</strong>
          <select 
            value={comic.amount} 
            onChange={(e) => handleIncreaseComicAmount(comic.id, Number(e.target.value))}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </SelectContainer>
        <strong>${(comic.amount * comic.prices[0].price).toFixed(2)}</strong>

        { comic.rare && <span><strong>RARO</strong></span> }

        <RemoveButton onClick={() => handleRemoveComicFromCart(comic.id)}>
          <BsTrashFill size={24} color="#ffffff" />
        </RemoveButton>
      </div>
    </Container>
  )
}