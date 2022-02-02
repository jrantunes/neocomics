import Link from 'next/link';
import { useCart } from '../../hooks/useCart';

import { StyledLink } from './styles';
import { BsCartFill } from 'react-icons/bs';

export function FloatingCartButton() {
  const { cart } = useCart();


  return (
    <Link href='/cart' passHref>
      <StyledLink>
        <BsCartFill size={30} color='#ffffff' />
        <strong>{cart.length}</strong>
      </StyledLink>
    </Link>
  );
}