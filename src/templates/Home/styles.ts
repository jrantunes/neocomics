import styled from 'styled-components';

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
    grid-gap: 3rem;
    
    @media(min-width: 810px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;