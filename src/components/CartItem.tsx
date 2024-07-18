
import { Button, Grid, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import { CartItemType } from '../types/CartItemType';
import { Image } from 'mui-image';
import { formatUSD } from "../utils/formatUSD";

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
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ padding: 5 }}>
          <Stack direction='row'>
            <Image
              src={require(`../assets/${item.id}.jpg`)}
              duration={325}
              width={'30%'}
              height={'auto'}
            />
            <Stack direction='column' sx={{ paddingLeft: 3, width: '100%' }}>
              <Typography sx={{ width: '66%', flexShrink: 0 }} variant='h4'>
                {item.name}
              </Typography>
              <Typography sx={{ mt: 6, mb: 3, color: 'text.secondary' }} variant='h5'>
                {formatUSD.format(item.price)} each
              </Typography>
            </Stack>
          </Stack>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Stack direction='row'>
              </Stack>
              <Typography variant='caption'>
                {item.id}
              </Typography>
              </Grid>
              <Grid item xs={6}>
                <Stack direction='row'>
                  <Button variant="contained" onClick={() => removeFromCart(item.id)}>-</Button>
                  <Typography px={3}> {item.quantity} </Typography>
                  <Button variant='contained' onClick={() => addToCart(item as CartItemType)}>+</Button>
                </Stack>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </>
  );
};

