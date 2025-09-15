
// ShopContext.js
import React, { createContext, useState, useEffect } from "react";
import all_product from "./all-product";
import data_product from "./product";

export const ShopContext = createContext(null);

const ShopcontextProvider = (props) => {
  // Merge both JSON files into one array
  const mergedProducts = [...all_product, ...data_product];

  const getDefaultCart = () => {
    let cart = {};
    mergedProducts.forEach((product) => {
      cart[product.id] = 0;
    });
    return cart;
  };

  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] + 1,
    }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] - 1,
    }));
  };

const getTotalCartAmount = () => {
  let totalAmount = 0;
  for (const item in cartItems) {
    if (cartItems[item] > 0) {
      const itemInfo = mergedProducts.find(
        (product) => product.id === Number(item)
      );
      if (itemInfo) {
        totalAmount += itemInfo.new_price * cartItems[item];
      }
    }
  }
  return totalAmount;
};


  const getTotalCartItem = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };

  useEffect(() => {
    console.log("Cart updated:", cartItems);
  }, [cartItems]);

  const contextValue = {
    getTotalCartItem,
    getTotalCartAmount,
     all_product,
  data_product,
  mergedProducts, // ✅ now available for all components
    cartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopcontextProvider;
