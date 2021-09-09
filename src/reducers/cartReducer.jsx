let initialState = {
  items: [],
  quantity: 0,
  totalPrice: 0,
};
export function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_ITEM":
      const isAlreadyAdded = state.items.find(
        (product) => product.item.id === action.payload.item.id
      );
      if (!isAlreadyAdded) action.payload.itemQuantity = 1;
      return {
        ...state,
        items: !isAlreadyAdded
          ? [...state.items, action.payload]
          : state.items.map((item) =>
              item.item.id === action.payload.item.id
                ? { ...item, itemQuantity: ++item.itemQuantity }
                : item
            ),
        quantity: state.quantity + 1
      };

    case "UPDATE_PRICE":
      return {
        ...state,
        totalPrice: state.items.reduce(
          (acc, val) => acc + val.itemQuantity * val.item.price,
          0
        ),
      };

    case "DECREMENT_QUANTITY":
      return {
        ...state,
        items: state.items.map((item) =>
          item.item.id === action.payload.item.id
            ? { ...item, itemQuantity: --item.itemQuantity }
            : item
        ),
        quantity: state.quantity - 1
      };

    case "DELETE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.item.id !== action.payload.id),
        quantity: state.quantity - 1
      };

    case "CLEAR_CART":
      return {
        items: [],
        quantity: 0,
        totalPrice: 0
      };

    default:
      return state;
  }
}
