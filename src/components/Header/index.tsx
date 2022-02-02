import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useCart } from '../../hooks/useCart';

import { Container } from './styles';
import { BsFillBookFill, BsFillCartFill, BsCart } from 'react-icons/bs';

export function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);
  
  const { cart } = useCart();
  const { pathname } = useRouter();

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);
  
  function handleScroll() {
    const position = window.pageYOffset;
    setScrollPosition(position);
  }
  
  return (
    <Container scrollPosition={scrollPosition}>
      <Link href='/' passHref>
        <div className='header-logo'>
          <BsFillBookFill size={35} color='#ffffff' />
          <h2>NEOCOMICS</h2>
        </div>
      </Link>

      { pathname !== '/cart' && (
        <Link href='/cart' passHref >
          <div className='header-cart'>
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
      ) }
    </Container>
  )
}