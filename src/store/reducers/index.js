import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from "../actions/types";
export default function cartReducers(state, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        cart: [
          ...state.cart,
          {
            product: action.productInfo,
            quantity: action.quantity
          }
        ]
      };
    case REMOVE_FROM_CART: {
      console.log("Hello, from REMOVE_FROM_CART");
      console.log(action.index);
      console.log(state);
      const itemIndex = action.index;
      const newState = [...state];
      newState.splice(itemIndex, 1);
      return newState;
      // return state;
    }
    case CLEAR_CART: {
      let newState = { ...state };
      newState = [];
      return newState;
    }

    default:
      if (state === undefined) return [];
      return state;
  }
}
