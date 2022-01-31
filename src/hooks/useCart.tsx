import Router from 'next/router';
import { useState, useEffect, createContext, useContext, ReactNode } from 'react';
import { toast } from 'react-toastify';
import { api } from '../services/api';

import { HomeTemplateProps } from '../templates/Home';
import { Comic } from '../types';

type CartContextData = {
  cart: Comic[];
  handleAddComicToCart: (comicId: number) => Promise<void>;
  handleRemoveComicFromCart: (comicId: number) => void;
  handleCleanCart: () => void;
  handleIncreaseComicAmount: (comicId: number, amount: number) => void;
}

type CartProviderProps = {
  children: ReactNode;
}

const CartContext = createContext({} as CartContextData);

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<Comic[]>([]);

  useEffect(() => {
    const storagedCart = localStorage.getItem('@neocomics:cart');
  
    if (storagedCart) {
      setCart(JSON.parse(storagedCart));
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

      const { id, description, prices, thumbnail, title, amount } = results[0];

      updatedCart.push({
        id,
        description,
        prices,
        thumbnail,
        title,
        amount: 1,
      });

      setCart(updatedCart);

      localStorage.setItem('@neocomics:cart', JSON.stringify(updatedCart));
      
      toast.success('HQ adicionado ao seu carrinho!');
    } catch{
      toast.error('Erro ao adicionar a HQ :(')
    }
  }

  function handleIncreaseComicAmount(comicId: number, amount: number) {
    const updatedCart = [...cart];
    const comic = updatedCart.find(comic => comic.id === comicId);

    comic.amount = amount;

    setCart(updatedCart);

    localStorage.setItem('@neocomics:cart', JSON.stringify(updatedCart));
  }

  function handleRemoveComicFromCart(comicId: number) {
    const updatedCart = [...cart];
    const comicIndex = updatedCart.findIndex(comic => comic.id === comicId);

    updatedCart.splice(comicIndex, 1);


    setCart(updatedCart); 

    localStorage.setItem('@neocomics:cart', JSON.stringify(updatedCart));

    toast.success('HQ removida do seu carrinho!');
  }

  function handleCleanCart() {
    localStorage.removeItem('@neocomics:cart');

    setCart([]);

    Router.push('/');
  }

  return (
    <CartContext.Provider value={{ cart, handleAddComicToCart, handleRemoveComicFromCart, handleCleanCart, handleIncreaseComicAmount }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext);

  return context;
}