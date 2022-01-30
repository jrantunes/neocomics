import { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import { Header } from '../components/Header'
import { CartProvider } from '../hooks/useCart'
import { GlobalStyle } from '../styles/global'

function MyApp({ Component, pageProps }: AppProps) {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);
  
  function handleScroll() {
    const position = window.pageYOffset;
    setScrollPosition(position);
  }
  
  return (
    <CartProvider>
      <Header 
        scrollPosition={scrollPosition} 
      />
      <ToastContainer autoClose={2000} theme='colored' position='bottom-right' />
      <Component {...pageProps} />
      <GlobalStyle />
    </CartProvider>
  )
}

export default MyApp
