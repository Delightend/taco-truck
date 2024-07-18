import * as React from 'react';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import BottomNav from './components/BottomNav';
import Cart from './components/Cart';
import Home from './components/Home';
import MainNav from './components/MainNav';
import { CartItemType } from './types/CartItemType';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);
  const cartItemsStorage = JSON.parse(localStorage.getItem("cartItems") || '');

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  
  const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems(cartItemsStorage);
    setCartItems((prev) => {
      const isItemInCart = prev.find((item) => item.id === clickedItem.id);

      if (isItemInCart) {
        return prev.map((item) =>
          item.id === clickedItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { ...clickedItem, quantity: 1 }];
    });
  };

  const handleRemoveFromCart = (id: string) => {
    setCartItems(cartItemsStorage);
    setCartItems((prev) =>
      prev.reduce((acc, item) => {
        if (item.id === id) {
          if (item.quantity === 1) return acc;
          return [...acc, { ...item, quantity: item.quantity - 1 }];
        } else {
          return [...acc, item];
        }
      }, [] as CartItemType[])
    );
  };

  return (
    <Container maxWidth={false} disableGutters={true}>
      <Box sx={{ flexGrow: 1 }}>
        <MainNav />
        <Container maxWidth={false} sx={{overflowY: 'scroll'}}>
          <Routes>
            <Route path='/' element={<Home addToCart={handleAddToCart} removeFromCart={handleRemoveFromCart} />} />
            <Route path='/Cart' element={<Cart addToCart={handleAddToCart} removeFromCart={handleRemoveFromCart} />} />
          </Routes>
        </Container>
      </Box>
      <BottomNav />
    </Container>
  );
}
