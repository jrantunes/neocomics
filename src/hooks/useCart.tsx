import { useState, useEffect, createContext, useContext, ReactNode } from 'react';
import { setCookie, parseCookies } from 'nookies';
import { toast } from 'react-toastify';
import { api } from '../services/api';

import { HomeTemplateProps } from '../templates/Home';
import { Comic } from '../types';

type CartContextData = {
  cart: Comic[];
  addComic: (comicId: number) => void;
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

  async function addComic(comicId: number) {
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
      
      toast.success('HQ adicionado ao seu carrinho :)');
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <CartContext.Provider value={{ cart, addComic }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext);

  return context;
}