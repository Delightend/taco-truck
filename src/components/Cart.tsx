import React, { useEffect, useState } from "react";
import { CartItemType } from "../types/CartItemType";
import CartItemComponent from "./CartItem";
import { Button, Grid, TextField, Typography } from "@mui/material";
import axios from "axios";

type CartProps = {
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: string) => void;
};

const API_POST = 'https://virtserver.swaggerhub.com/Detroit_Labs/Taco_Truck/1.0.0/order'
export default function Cart({
  addToCart,
  removeFromCart
}: CartProps) {
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);
  const [customerName, setCustomerName] = useState<string>('');
  
  useEffect(() => {
    const cartItemsStorage = JSON.parse(localStorage.getItem("cartItems") || '');
    setCartItems(cartItemsStorage);
  }, []);
  
  let runningTotal = 0;
  cartItems.forEach(item => {
    runningTotal = runningTotal + (item.price * item.quantity);
  });

  const handleSubmit = () => {
    axios.post(API_POST,
      {
        customerName,
        totalPrice: runningTotal,
        orderItems: cartItems,
      })
      .then(function (response) {
        console.log(response);
        localStorage.setItem('cartItems', '[]');
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {
  }, []);
  
  return (
    <>
      <Typography variant='h3'>Your Cart</Typography>
      {cartItems.length === 0 ? <Typography>No items in cart.</Typography> :  
          <>
            <Typography variant='h4'>Total: ${runningTotal.toFixed(2)}</Typography>
            <TextField
              id="outlined-basic"
              label="Your Name"
              variant="outlined"
              name={customerName}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setCustomerName(event.target.value);
              }}
            />
            <Button color='success'
              variant='contained'
              onClick={handleSubmit}
              type='submit'
            >
              Check Out
            </Button>
            <Grid container spacing={2}>
              {cartItems.map((item) => (
                <Grid item xs={6}>
                  <CartItemComponent
                    key={item.id}
                    item={item}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                  />
                </Grid>
              ))}
            </Grid>
          </>
      }
    </>
  );
};