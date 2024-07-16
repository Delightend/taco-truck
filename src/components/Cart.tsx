import React from "react";
import { CartItemType } from "../types/CartItemType";
import CartItemComponent from "./CartItem";
import { Typography } from "@mui/material";

type CartProps = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: string) => void;
};

export default function Cart({
  cartItems,
  addToCart,
  removeFromCart
}: CartProps) { 
  console.log(cartItems);
  const calculateTotal = (items: CartItemType[]) =>
    items.reduce((acc, item) => acc + item.quantity * item.price, 0);

  return (
    <>
      <Typography variant='h3'>Your Cart</Typography>
      {cartItems.length === 0 ? <Typography>No items in cart.</Typography> : null}
      {cartItems.map((item) => (
        <CartItemComponent
        key={item.id}
        item={item}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        />
      ))}
      <Typography variant='h4'>Total: ${calculateTotal(cartItems).toFixed(2)}</Typography>
    </>
  );
};