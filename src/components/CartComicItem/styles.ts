import { darken } from "polished";
import styled from "styled-components";

export const Container = styled.li`
  position: relative;
  width: 100%;
  padding: 1rem;

  display: flex;
  gap: 1rem;
  
  background: var(--blue-600); 
  border: 1px solid var(--blue-500);
  border-radius: 1rem;

  overflow: hidden;

  img {
    height: 10rem;
    width: 10rem;

    border-radius: 1rem;

    object-fit: cover;
  }

  > div {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    > strong {
      color: var(--white);

      font-size: 1.25rem;

      &:last-of-type {
        color: var(--gray-300);
      }
    }

    span {
      position: absolute;

      top: 0;
      left: 0;

      background: var(--yellow);
      width: fit-content;
      padding: 0.5rem;

      border-radius: 1rem;
      
      strong {
        font-size: 0.75rem;

        color: var(--white);
      }
    }
  }
` 

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  strong {
    color: var(--gray-300);
    font-size: 1.125rem;
    font-weight: 500;
  }

  select {
    width: fit-content;
    padding: 0.5rem;
    
    background: var(--blue-600);
    border-radius: 1rem;
    border-color: var(--blue-500);

    font-size: 1.25rem;
    color: var(--white);

    cursor: pointer;
  }
`

export const RemoveButton = styled.button`
  position: absolute;
  bottom: 1rem;
  right: 1rem;

  background: var(--red-300);
  font-size: 0;
  padding: 1rem;
  
  border-radius: 1rem;

  transition: background-color 0.2s;

  &:hover {
    background: ${darken(0.05, '#fd514d')};
  }
`