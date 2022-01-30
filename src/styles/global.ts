import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export const GlobalStyle = createGlobalStyle`
  :root {
    --white: #ffffff;
    --yellow: #ffc300;

    --white-200: #e7e7e7;

    --gray-300: #969cb3;
    
    --blue-500: #393059;
    --blue-600: #241e38;
    --blue-700: #1a1e31;

    --red-300: #fd514d;

    --green-300: #33cc95;
  }
  
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    @media(max-width: 1080px) {
      font-size: 93.75%;
    }

    @media(max-width: 1080px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--blue-700);
    -webkit-font-smoothing: antialiased;
  }
  
  body, input, button {
    font: 400 1rem "Roboto", sans-serif;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }

  button {
    cursor: pointer;

    border: 0;
  }
  
  li {
    list-style: none;
  }
`