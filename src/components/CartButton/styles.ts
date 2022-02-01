import { darken } from 'polished';
import styled from 'styled-components';

type ButtonProps = {
  isAlreadyAddedToCart: boolean;
}

export const Button = styled.button<ButtonProps>`
  padding: 1rem 2rem;
  border-radius: 0.25rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${(props) => props.isAlreadyAddedToCart 
      ? 'var(--red-300)' 
      : 'var(--blue-500)'
  };

  font-weight: 500;
  color: var(--white);

  transition: background-color 0.2s;

  &:hover {
    background: ${(props) => darken(0.05, props.isAlreadyAddedToCart ? '#fd514d' : '#393059')}
  }
`;