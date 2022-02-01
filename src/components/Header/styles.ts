import styled from 'styled-components';

type HeaderProps = {
  scrollPosition: number;
}

export const Container = styled.header<HeaderProps>`
  position: fixed;
  z-index: 2;
  top: 0;
  width: 100vw;
  padding: 1.5rem 2.5rem;
  background-color: ${({ scrollPosition }) => scrollPosition > 40 
    ? 'var(--red-300)' 
    : 'transparent' 
  };

  transition: background-color 0.2s;

  display: flex;
  align-items: center;
  justify-content: center;

  @media(min-width: 720px) {
    justify-content: space-between;
  }

  .header-logo {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    cursor: pointer;
   
    h2 {
      font-family: Poppins, sans-serif;
      font-weight: 600;
      font-size: 1.25rem;
      color: var(--white);
    }
  }

  .header-cart {
    display: none;

    @media(min-width: 720px) {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      
      cursor: pointer;
    }

    strong {
      position: relative;
      color: var(--white);

      font-size: 1.1rem;

      &:after {
        content: '';
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 2px;
        bottom: -4px;
        left: 0;
        background: var(--white);
        transform-origin: bottom right;
        transition: transform 0.25s ease-out;
      }
    }

    &:hover {
      strong {
        &:after {
          transform: scaleX(1);
          transform-origin: bottom left;
        }
      }
    }
  }
`;