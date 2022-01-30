import { useState, useEffect, createContext, useContext, ReactNode } from 'react';
import { setCookie, parseCookies } from 'nookies';
import { toast } from 'react-toastify';
import { api } from '../services/api';

import { HomeTemplateProps } from '../templates/Home';
import { Comic } from '../types';

type CartContextData = {
  cart: Comic[];
  handleAddComicToCart: (comicId: number) => Promise<void>;
  handleRemoveComicFromCart: (comicId: number) => void;
}

type CartProviderProps = {
  children: ReactNode;
}

const CartContext = createContext({} as CartContextData);

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<Comic[]>([]);

  useEffect(() => {
    const { 'neocomics.cart': cookiesCart } = parseCookies();
  
    if (cookiesCart) {
      const parsedCart = JSON.parse(cookiesCart);

      setCart(parsedCart);
    }
  }, [])

  async function handleAddComicToCart(comicId: number) {
    try {
      const updatedCart = [...cart];
    
      const { data } = await api.get<{ data: HomeTemplateProps }>(`/comics/${comicId}`, {
        params: {
          apikey: process.env.NEXT_PUBLIC_MARVEL_API_PUBLIC_KEY,
        }
      });

      const { results } = data.data;

      const { id, description, prices, thumbnail, title } = results[0];

      updatedCart.push({
        id,
        description,
        prices,
        thumbnail,
        title,
      });

      setCookie(undefined, 'neocomics.cart', JSON.stringify(updatedCart), {
        maxAge: 60 * 60 * 24, // 24 horas
        path: '/'
      });

      setCart(updatedCart);
      
      toast.success('HQ adicionado ao seu carrinho!');
    } catch(err) {
      console.log(err);
    }
  }

  function handleRemoveComicFromCart(comicId: number) {
    console.log(comicId);

    const updatedCart = [...cart];
    
    console.log(updatedCart);
    
    const comicIndex = updatedCart.findIndex(comic => comic.id === comicId);

    console.log(comicIndex);

    updatedCart.splice(comicIndex, 1);

    console.log(updatedCart);
    
    setCookie(undefined, 'neocomics.cart', JSON.stringify(updatedCart), {
      maxAge: 60 * 60 * 24, // 24 horas
      path: '/', // acessível em qualquer caminho
    });

    setCart(updatedCart); 

    toast.success('HQ removida do seu carrinho!');
  }

  return (
    <CartContext.Provider value={{ cart, handleAddComicToCart, handleRemoveComicFromCart }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext);

  return context;
}