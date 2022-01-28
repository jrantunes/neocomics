import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.main`
  position: relative;
`;

export const Content = styled.div`
  margin-top: calc(6rem + 2rem);
  padding: 0 2rem;

  h1 {
    margin-bottom: 2rem;
    color: var(--white-200);
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 3rem;

    @media(min-width: 620px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media(min-width: 920px) {
      grid-template-columns: repeat(4, 1fr);
    }

    li {
      .item-info {
        width: 100%;
        margin: 1rem 0;

        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.25rem;
        
        strong {
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
        display: flex;
        flex-direction: column;
        gap: 1rem;

        div {
          padding: 1rem;
          background: #393059;
          border-radius: 20%;

          cursor: pointer;
        }

        button {
          padding: 1rem 2rem;
          border: none;
          border-radius: 0.25rem;

          display: flex;
          align-items: center;
          justify-content: center;
          
          background: var(--red-300);
          font-weight: 500;
          color: var(--white);

          transition: background-color 0.2s;

          &:hover {
            background: ${darken(0.05, '#fd514d')}
          }

          &:last-of-type {
            display: flex;
            align-items: center;
            
            background: #393059;

            transition: background-color 0.2s;

            &:hover {
              background: ${darken(0.05, '#393059')}
            }
          }
        }
      }
    }
  }
`;