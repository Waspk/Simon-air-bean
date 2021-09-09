import React, { useEffect } from "react";
import Product from "./Product";
import "../css/menu.css";
import Nav from "./Nav";
import Cart from "./Cart";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../actions/fetchProducts";
import { useSelector } from "react-redux";
import { addItem } from "../actions/addToCart";
import { updatePrice } from "../actions/addToCart";

const Menu = () => {

  const menuItem = useSelector((state) => state.productsItems);
  const quantity = useSelector((state) => state.cart.quantity);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const handleSelectProduct = (product) => {
    dispatch(addItem(product));
    dispatch(updatePrice());
  };

  return (
    <>
      <div className="navigation">
        <Nav />
        <Cart
          selectedItemsQyn={quantity}
          totalCost={totalPrice}
        />
      </div>
      <div className="menu">
        <div className="menu-content">
          <h1>Meny</h1>
          {menuItem &&
            menuItem.map((product) => {
              return (
                <Product
                  product={product}
                  key={product.id}
                  addToCartClick={() => handleSelectProduct(product)}
                />
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Menu;
