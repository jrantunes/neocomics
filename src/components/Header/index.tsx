import Image from 'next/image';

import avatarImg from '../../assets/images/avatar.jpg';

import { BsFillBookFill } from 'react-icons/bs';
import { Container } from './styles';

type HeaderProps = {
  scrollPosition: number; 
}

export function Header({ scrollPosition }: HeaderProps) {
  return (
    <Container scrollPosition={scrollPosition}>
      <div className='header-logo'>
        <BsFillBookFill size={35} color='var(--white)' />
        <h2>NEOCOMICS</h2>
      </div>

      <div className="header-user">
        <strong>John Doe</strong>
        <div className="header-user-avatar">
          <Image src={avatarImg} alt='John Doe' />
        </div>
      </div>
    </Container>
  )
}