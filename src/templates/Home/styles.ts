import styled from 'styled-components';

export const Container = styled.main`
  position: relative;
`

export const Content = styled.div`
  margin: calc(6rem + 2rem) 0 2rem;
  padding: 0 2.5rem;

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