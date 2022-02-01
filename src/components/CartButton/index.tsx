import { useCart } from "../../hooks/useCart"

import { Button } from './styles';

type CartButtonProps = {
  alreadyInCart: boolean;
  comicId: number;
  rare?: boolean;
}

export function CartButton({ alreadyInCart, comicId, rare = false }: CartButtonProps) {
  const { handleAddComicToCart, handleRemoveComicFromCart } = useCart();

  return alreadyInCart ? (
    <Button isAlreadyAddedToCart={alreadyInCart} onClick={() => handleRemoveComicFromCart(comicId)}>
      Remover do carrinho
    </Button>  
  ) : (
    <Button isAlreadyAddedToCart={alreadyInCart} onClick={() => handleAddComicToCart(comicId, rare)}>
      Adicionar ao carrinho
    </Button>
  )
}