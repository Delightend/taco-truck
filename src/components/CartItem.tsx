
import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { CartItemType } from '../types/CartItemType';
import { Image } from 'mui-image';

type CartItemProps = {
  item: CartItemType;
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: string) => void;
};

export default function CartItemComponent({
  item,
  addToCart,
  removeFromCart
}: CartItemProps) {
  return (
    <>
      <Box>
        <Typography variant="h3">
          {item.name}
          </Typography>
        <Box>
          <Typography>Price: ${item.price}</Typography>
          <Typography>Total: ${(item.quantity * item.price).toFixed(2)}</Typography>
        </Box>
        <Stack direction='row'>
        <Button
          size="small"
          variant="contained"
          onClick={() => removeFromCart(item.id)}
        >
          -
        </Button>
        <Typography>{item.price}</Typography>
        <Button
          size="small"
          variant="contained"
          onClick={() => addToCart(item)}
        >
          +
        </Button>
        </Stack>
        <Image
              src={require(`../assets/${item.id}.jpg`)}
              duration={325}
              width={'30%'}
              height={'auto'}
            />
      </Box>
    </>
  );
};

