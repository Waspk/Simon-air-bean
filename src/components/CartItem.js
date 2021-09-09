import React from "react";
import "../css/cartItem.css";
import { useDispatch } from "react-redux";
import {
  addItem,
  decrementQuantity,
  deleteItem,
  updatePrice,
} from "../actions/addToCart";

export const CartItem = ({ item, quantity }) => {
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(addItem(item));
    dispatch(updatePrice());
  };

  const decrement = (id) => {
    if (quantity > 1) {
      dispatch(decrementQuantity(item));
    } else {
      dispatch(deleteItem(id));
    }
    dispatch(updatePrice());
  };

  return (
    <div className="cartItem-wrap">
      <div className="item-detials">
        <div className="item-title">{item.title}</div>
        <div className="item-price">{item.price} kr</div>
      </div>
      <div className="qyn-controle">
        <button className="btn arrow add" onClick={() => increment()}></button>
        <div className="item-qyn">{quantity}</div>
        <button
          className="btn arrow subtract"
          onClick={() => decrement(item.id)}
        ></button>
      </div>
    </div>
  );
};
