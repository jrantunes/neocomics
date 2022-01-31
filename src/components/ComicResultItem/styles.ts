import styled from 'styled-components';

import { darken } from 'polished';

type ContainerProps = {
  isAlreadyAddedToCart: boolean;
}

export const Container = styled.li<ContainerProps>`
  max-height: 20rem;
 
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 0.5rem;

  .item-cover {
    img {
      width: 100%;
      height: 20rem;

      object-fit: cover;
    }
  }

  .item-details {
    height: 20rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .item-info {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      span {
        background: var(--yellow);
        width: fit-content;
        padding: 0.5rem;

        border-radius: 999px;

        strong {
          color: var(--white);
        }
      }

      > strong {
        color: var(--white);
        font-size: 1.25rem;
      }

      p {
        color: #969cb3;
  
        &:last-of-type {
          font-size: 1.125rem;
          font-weight: 700;
       }
      }
    }

    .item-actions {
      width: 70%;

      display: flex;
      flex-direction: column;
      gap: 1rem;

      button {
        padding: 1rem 2rem;
        border-radius: 0.25rem;

        display: flex;
        align-items: center;
        justify-content: center;
      
        background: var(--green-300);
        font-weight: 500;
        color: var(--white);

        transition: background-color 0.2s;

        &:hover {
          background: ${darken(0.1, '#33cc95')}
        }

        &:last-of-type {
          display: flex;
          align-items: center;
        
          background: ${(props) => props.isAlreadyAddedToCart 
            ? 'var(--red-300)' 
            : 'var(--blue-500)'
          };

          transition: background-color 0.2s;

          &:hover {
            background: ${(props) => darken(0.05, props.isAlreadyAddedToCart ? '#fd514d' : '#393059')}
          }
        }
      }
    }
  }
`