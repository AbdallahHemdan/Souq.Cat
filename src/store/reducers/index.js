import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from "../actions/types";
export default function cartReducers(state, action) {
  console.log(action, state);
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
      const itemIndex = action.index;
      const newState = [...state];
      newState.splice(itemIndex, 1);
      return newState;
    }
    case CLEAR_CART: {
      let newState = { ...state };
      newState = [];
      return newState;
    }

    default:
      return state;
  }
}
