import Image from 'next/image';
import { useCart } from '../../hooks/useCart';

import { Container, EmptyCartContainer, CartActionButton } from './styles';
import { CartComicItem } from '../../components/CartComicItem';

import emptyCartImg from '../../assets/images/empty-cart-illustration.png';

export default function Cart() {
  const { cart, handleCleanCart } = useCart();

  const total = cart.reduce((acc, comic) => (comic.amount * comic.prices[0].price) + acc, 0).toFixed(2);

  return cart.length === 0 ? (
    <EmptyCartContainer>
      <div>
        <Image src={emptyCartImg} alt='Ilustração de carrinho vazio' />
      </div>
      <h1>Seu carrinho está vazio :(</h1>
    </EmptyCartContainer>
  ) : (
    <Container>
      <div>
        <h1>Seu carrinho:</h1>
        <CartActionButton onClick={handleCleanCart}>Limpar carrinho</CartActionButton>
      </div>

      <ul>
        {cart.map(comic => (
          <CartComicItem 
            key={comic.id}
            comic={comic}
          />
        ))}
      </ul>

      <div>
        <h2>Total: ${total}</h2>
        <CartActionButton onClick={handleCleanCart}>Finalizar pedido</CartActionButton>
      </div>
    </Container>
  ) 
}