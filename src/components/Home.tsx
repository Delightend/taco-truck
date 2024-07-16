import * as React from 'react';
import { Image } from 'mui-image';
import { Container } from '@mui/material';
import Menu from './Menu';
import { CartItemType } from '../types/CartItemType';

interface HomeProps {
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: string) => void;
}

export default function Home({
  addToCart,
  removeFromCart,
}: HomeProps) {
  return (
    <Container maxWidth={false}>
      <Image src={require(`../assets/location.jpg`)} duration={1000} width={'100%'} height={'70vh'} />
      <Menu addToCart={addToCart} removeFromCart={removeFromCart} />
    </Container>
  );
}

