import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from "./types";

export function addToChart(productInfo, quantity) {
  return {
    type: ADD_TO_CART,
    productInfo,
    quantity
  };
}

export function removeFromCart(index) {
  return {
    type: REMOVE_FROM_CART,
    index
  };
}
export function clearCart() {
  return {
    type: CLEAR_CART
  };
}
