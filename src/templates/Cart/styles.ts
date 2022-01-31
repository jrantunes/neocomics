import styled from "styled-components";
import { darken } from 'polished';

export const EmptyCartContainer = styled.main`
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div {
    height: 20rem;
    width: 20rem;
    margin-bottom: 1.5rem;

    img {
      object-fit: contain;
    }
  }

  h1 {
    color: var(--white);
    letter-spacing: 0.2px;
  }
`;

export const Container = styled.main`
  margin: calc(6rem + 2rem) 0 2rem;
  padding: 0 2.5rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;
  

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      color: var(--white-200);
    }

    &:last-of-type {
      justify-content: center;
      gap: 1.5rem;

      h2 {
        font-size: 1.25rem;
        color: var(--white);
      }

      button {
        background: var(--green-300);

        &:hover {
          background: ${darken(0.05, '#33cc95')};
        }
      }
    }
  }

  ul {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1rem;
    
    @media(min-width: 720px) {
      grid-template-columns: repeat(2, 1fr);
      
    }
  }
`;

export const CartActionButton = styled.button`
  padding: 1rem 2rem;
  border-radius: 0.25rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background: var(--red-300);
  font-weight: 500;
  color: var(--white);

  transition: background-color 0.2s;

  &:hover {
    background: ${darken(0.05, '#fd514d')};
  }
`