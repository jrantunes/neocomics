import { BsFillBookFill, BsFillCartFill, BsCart } from 'react-icons/bs';
import { Container } from './styles';
import Link from 'next/link';
import { useCart } from '../../hooks/useCart';

type HeaderProps = {
  scrollPosition: number; 
}

export function Header({ scrollPosition }: HeaderProps) {
  const { cart } = useCart();
  
  return (
    <Container scrollPosition={scrollPosition}>
      <Link href="/" passHref>
        <div className='header-logo'>
          <BsFillBookFill size={35} color='#ffffff' />
          <h2>NEOCOMICS</h2>
        </div>
      </Link>

      <Link href='/cart' passHref >
        <div className="header-cart">
          { cart.length > 0 ? (
            <BsFillCartFill size={34} color='#ffffff' />
          ) : (
            <BsCart size={34} color='#ffffff' />
          )}
          <strong>
            { cart.length > 0 
              ? `Seu carrinho possui ${cart.length} ${cart.length > 1 ? 'Itens' : 'Item'}` 
              : 'Carrinho vazio' }
          </strong>
        </div>
      </Link>
    </Container>
  )
}