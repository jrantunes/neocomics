import { darken } from 'polished';
import styled from 'styled-components';

type ButtonProps = {
  isCurrent?: boolean;
}

export const Button = styled.button<ButtonProps>`
  padding: 0.5rem 0.75rem;
  border-radius: 0.25rem;

  color: var(--white);
  background: ${props => props.isCurrent ? 'var(--red-300)' : 'var(--blue-500)'};
  
  ${props => props.isCurrent && {
    cursor: 'not-allowed',
    filter: 'brightness(0.7)',
  }}

  transition: background-color 0.2s;

  &:hover {
    background: ${props => !props.isCurrent && darken(0.04, '#393059')};
  }
`;