import Image from 'next/image';
import { Container, Content } from './styles';
import { useEffect, useState } from 'react';

import { BsFillCartFill } from 'react-icons/bs';
import { Header } from '../../components/Header';

import coverImg from '../../assets/images/cover.jpg';


export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);
  
  function handleScroll() {
    const position = window.pageYOffset;
    setScrollPosition(position);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])

  return (
    <Container>
      <Header 
        scrollPosition={scrollPosition} 
      />
      <Content>
        <h1>Lista de quadrinhos</h1>

        <ul>
          <li>
            <Image src={coverImg} alt='HQ Example Cover' />
            <div className="item-info">
              <strong>HQ Example</strong>
              <p>2021</p>
              <p>R$10.00</p>
            </div>
            <div className='item-actions'>
              <button>Comprar</button>
              <button>
                Adicionar ao carrinho
              </button>
            </div>
          </li>
          <li>
            <Image src={coverImg} alt='HQ Example Cover' />
            <div className="item-info">
              <strong>HQ Example</strong>
              <p>2021</p>
              <p>R$10.00</p>
            </div>
            <div className='item-actions'>
              <button>Comprar</button>
              <button>
                Adicionar ao carrinho
              </button>
            </div>
          </li>
          <li>
            <Image src={coverImg} alt='HQ Example Cover' />
            <div className="item-info">
              <strong>HQ Example</strong>
              <p>2021</p>
              <p>R$10.00</p>
            </div>
            <div className='item-actions'>
              <button>Comprar</button>
              <button>
                Adicionar ao carrinho
              </button>
            </div>
          </li>
          <li>
            <Image src={coverImg} alt='HQ Example Cover' />
            <div className="item-info">
              <strong>HQ Example</strong>
              <p>2021</p>
              <p>R$10.00</p>
            </div>
            <div className='item-actions'>
              <button>Comprar</button>
              <button>
                Adicionar ao carrinho
              </button>
            </div>
          </li>
          <li>
            <Image src={coverImg} alt='HQ Example Cover' />
            <div className="item-info">
              <strong>HQ Example</strong>
              <p>2021</p>
              <p>R$10.00</p>
            </div>
            <div className='item-actions'>
              <button>Comprar</button>
              <button>
                Adicionar ao carrinho
              </button>
            </div>
          </li>
          <li>
            <Image src={coverImg} alt='HQ Example Cover' />
            <div className="item-info">
              <strong>HQ Example</strong>
              <p>2021</p>
              <p>R$10.00</p>
            </div>
            <div className='item-actions'>
              <button>Comprar</button>
              <button>
                Adicionar ao carrinho
              </button>
            </div>
          </li>
          <li>
            <Image src={coverImg} alt='HQ Example Cover' />
            <div className="item-info">
              <strong>HQ Example</strong>
              <p>2021</p>
              <p>R$10.00</p>
            </div>
            <div className='item-actions'>
              <button>Comprar</button>
              <button>
                Adicionar ao carrinho
              </button>
            </div>
          </li>
        </ul>
      </Content>
    </Container>
  )
}