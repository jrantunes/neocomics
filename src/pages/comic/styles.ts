import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.main`
  position: relative;

  display: flex;
  justify-content: center;
`

export const Content = styled.div`
  margin: calc(6rem + 2rem) 0 7rem;
  padding: 0 2.5rem;

  display: flex;
  flex-direction: column;

  gap: 2rem;

  @media(min-width: 500px) {
    flex-direction: row;

    margin-bottom: 2rem;
  }

  > div {
    flex: 6;

    @media(min-width: 500px) {
      padding: 1rem 0 1rem 1rem;
    }
  
    img {
      height: 24rem;

      width: 100%;
  
      border-radius: 1rem;
      
      object-fit: cover;
      object-position: center center;

      @media(min-width: 720px) {
        height: 32rem;
      }
    }
  }

  section {
    flex: 9;
    width: fit-content;
    padding: 1rem 1rem 1rem 0;

    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    h1 {
      color: var(--white);

      font-size: 1.75rem;
    }

    > strong, p strong {
      font-size: 1.125rem;
      color: ${darken(0.35, '#969cb3')};
    }

    p {
      color: var(--gray-300);
      line-height: 1.25rem;
      max-width: 36rem;
    }

    div:first-of-type {
      strong {
        display: block;
        color: var(--white);
        font-size: 1.125rem;
        
        margin-bottom: 0.25rem;
      }

      ul {
        li {
          margin-left: 0.5rem;
        }
      }
    }

    div:last-of-type {
      display: flex;
      align-items: center;
      gap: 1.5rem;

      strong:last-of-type {
        position: relative;
        display: block;
        margin-left: 0.75rem;
        
        color: var(--green-300);
        font-size: 1.75rem;
  
        span {
          position: absolute;
  
          font-size: 1rem;
  
          top: 0.1rem;
          left: -0.75rem;
        }
      }
    }
  }
`;