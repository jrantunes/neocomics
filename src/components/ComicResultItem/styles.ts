import styled from 'styled-components';

import { darken } from 'polished';

type ContainerProps = {
  isAlreadyAddedToCart: boolean;
}

export const Container = styled.li<ContainerProps>`
  position: relative;
  max-width: 32rem;
  width: 100%;
  padding: 1.5rem;
  background: var(--blue-600);
  border: 1px solid var(--blue-500);
  border-radius: 1rem;
  
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  img {
    width: 100%;
    height: 24rem;

    border-radius: 1rem;

    object-fit: cover;
  }

  .item-details {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    span {
      position: absolute;
      top: -0.25rem;
      left: -0.25rem;

      background: var(--yellow);
      width: fit-content;
      padding: 0.5rem;

      border-radius: 999px;

      strong {
        color: var(--white);
      }
    }
    
    a {
      position: relative;
      text-decoration: none;
      width: fit-content;
      color: var(--white);
      font-weight: 700;
      font-size: 1.25rem;

      transition: color 0.2s;

      &:after {
        content: '';
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 1px;
        bottom: -4px;
        left: 0;
        background: var(--gray-300);
        transform-origin: bottom right;
        transition: transform 0.25s ease-out;
      }

      &:hover {
        color: var(--gray-300);

        &:after {
          transform: scaleX(1);
          transform-origin: bottom left;
        }
      }
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
    margin-top: auto;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;

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
`