import React from 'react';
import { useCart } from '../../context/CartContext';
import Cart from '../presentational/Cart';

const CartContainer = () => {
  const { cart, removeItem, clearCart, totalPrice } = useCart();

  return (
    <Cart cart={cart} removeItem={removeItem} clearCart={clearCart} totalPrice={totalPrice} />
  );
}

export default CartContainer;

