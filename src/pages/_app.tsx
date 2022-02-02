import { AppProps } from 'next/app'

import { queryClient } from '../services/queryClient';

import { CartProvider } from '../hooks/useCart'
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ToastContainer } from 'react-toastify'
import { Header } from '../components/Header'
import { GlobalStyle } from '../styles/global'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <QueryClientProvider client={queryClient}>
        <Header />
        <ToastContainer autoClose={2000} theme='colored' position='bottom-right' />
        <Component {...pageProps} />
        <ReactQueryDevtools />
        <GlobalStyle />
      </QueryClientProvider>
    </CartProvider>
  )
}

export default MyApp;
