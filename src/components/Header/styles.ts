import styled from 'styled-components';

type HeaderProps = {
  scrollPosition: number;
}

export const Container = styled.header<HeaderProps>`
  position: fixed;
  z-index: 1;
  top: 0;
  width: 100vw;
  padding: 1rem 2.5rem;
  background-color: ${({ scrollPosition }) => scrollPosition > 40 
    ? 'var(--red-300)' 
    : 'transparent' 
  };

  transition: background-color 0.2s;

  display: flex;
  align-items: center;
  justify-content: space-between;

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

  .header-user {
    display: flex;
    align-items: center;
    gap: 1rem;

    strong {
      color: var(--white);
      font-size: 0.875rem;
      font-weight: 500;
    }
  }

  .header-user-avatar {
    height: 4rem;
    width: 4rem;

    border-radius: 50%;

    overflow: hidden;

    img {
      object-fit: contain;
    }
  }
`;