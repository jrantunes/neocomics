import { darken } from "polished";
import styled from "styled-components";

export const StyledLink = styled.a`
  position: fixed;

  display: inline;

  bottom: 1.25rem;
  right: 1.25rem;

  background: var(--blue-500);

  padding: 1.5rem;

  border-radius: 50%;

  transition: background-color 0.2s;

  &:hover {
    background: ${darken(0.05, '#393059')};
  }

  @media(min-width: 720px) {
    display: none;
  }

  strong {
    position: absolute;
    top: 0rem;
    right: 0rem;

    background: var(--white);
    padding: 0.25rem 0.675rem;

    border-radius: 999px;

    text-decoration: none;
    color: #333333;
    font-size: 1.25rem;
  }
`