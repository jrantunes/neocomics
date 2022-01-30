import { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import { Header } from '../components/Header'
import { CartProvider } from '../hooks/useCart'
import { GlobalStyle } from '../styles/global'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Header />
      <ToastContainer autoClose={2000} theme='colored' position='bottom-right' />
      <Component {...pageProps} />
      <GlobalStyle />
    </CartProvider>
  )
}

export default MyApp
