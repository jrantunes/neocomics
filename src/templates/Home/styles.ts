import styled from 'styled-components';

export const Container = styled.main`
  position: relative;
  width: 100%;

  display: flex;
  flex-direction: column;
`

export const Banner = styled.div`
  position: relative;
  width: 100%;
  height: 18rem;
  margin: calc(6rem + 2rem) auto 2rem;
  padding: 2rem;
  border-radius: 2rem 2rem 16rem 2rem;

  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;

  background: var(--blue-600);

  @media(min-width: 740px) {
    width: 85%;
  }

  .image {
    position: absolute;
    
    bottom: -0.25rem;
    right: 1.125rem;

    mask-image: -webkit-gradient(linear, right bottom, left top, 
      color-stop(0.00,  rgba(0,0,0,0)),
      color-stop(1.00,  rgba(0,0,0,1))
    );
  }

  h1 {
    z-index: 1;
    max-width: 36rem;
    
    font-size: 1.75rem;
    color: var(--gray-300);
    letter-spacing: 1.75px;
    line-height: 2.25rem;
  }
`;

export const Content = styled.div`
  margin-bottom: 7rem;
  padding: 0 2.5rem;

  display: flex;
  flex-direction: column;

  h1 {
    margin-bottom: 2rem;
    color: var(--white-200);
  }

  ul {
    margin-bottom: 2rem;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 1.5rem;

    @media(min-width: 720px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media(min-width: 1040px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;