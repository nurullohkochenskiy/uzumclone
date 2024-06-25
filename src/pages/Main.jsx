import React from "react";
import Products from "../components/Products";
import Carousel from "../components/Carousel";

export default function Main({
  products,
  setInputStatus,
  likedItems,
  addToWishes,
  cartItems,
  addToCart,
  AmountDisplay,
}) {
  return (
    <div onClick={() => setInputStatus(false)}>
      <Carousel />
      <Products
        products={products}
        likedItems={likedItems}
        addToWishes={addToWishes}
        cartItems={cartItems}
        addToCart={addToCart}
        AmountDisplay={AmountDisplay}
      />
    </div>
  );
}
