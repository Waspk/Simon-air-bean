export const addItem = (item, itemQuantity) => {
  return {
    type: "ADD_ITEM",
    payload: { item, itemQuantity }
  };
};

export const decrementQuantity = (item, itemQuantity) => {
  return {
    type: "DECREMENT_QUANTITY",
    payload: { item, itemQuantity }
  };
};

export const deleteItem = (id) => {
  return {
    type: "DELETE_ITEM",
    payload: { id }
  };
};

export const updatePrice = () => {
  return {
    type: "UPDATE_PRICE"
  };
};

export const clearCart = () => {
  return {
    type: "CLEAR_CART"
  };
};
