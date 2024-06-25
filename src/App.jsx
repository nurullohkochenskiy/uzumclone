import products from "./data.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useEffect, useState } from "react";

import "./css/App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Single from "./pages/Single";
import { Navigate, Route, Routes, json, useNavigate } from "react-router-dom";
import Main from "./pages/Main.jsx";
import Login from "./pages/Login.jsx";
import Wishes from "./pages/Wishes.jsx";
import Cart from "./pages/Cart.jsx";
const getLocatStorage = () => {
  if (localStorage.getItem("user")) {
    return JSON.parse(localStorage.getItem("user"));
  } else return null;
};
function App() {
  const [user, setUser] = useState(getLocatStorage());
  function AmountDisplay({ amount }) {
    // Format the amount with thousands separator
    const formattedAmount = amount.toLocaleString().replace(/,/g, " ");

    return formattedAmount;
  }
  //! Savat&Like start
  const [likedItems, setLikedItems] = useState(
    JSON.parse(localStorage.getItem("likeditems")) || []
  );
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );
  function addToWishes(id) {
    if (likedItems.includes(id)) {
      setLikedItems(
        likedItems.filter((idceck) => Number(idceck) !== Number(id))
      );
    } else {
      setLikedItems([...likedItems, id]);
    }
  }
  function addToCart(id) {
    if (!cartItems.some((item) => item.id == id)) {
      setCartItems([...cartItems, { id: id, amount: 1 }]);
    }
  }
  function deleteFromCart(id) {
    setCartItems(cartItems.filter((item) => Number(item.id) !== Number(id)));
  }
  //! Savat&Like end
  const [uName, setuName] = useState("");
  const [searchInputVal, setSearchInputVal] = useState("");
  const [inputStatus, setInputStatus] = useState(false);
  //! Login logout start
  const userLoguout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);
  //! Login logout end
  localStorage.setItem("likeditems", JSON.stringify(likedItems));
  localStorage.setItem("cartItems", JSON.stringify(cartItems));

  return (
    <>
      {
        <>
          <Navbar
            userLoguout={userLoguout}
            searchInputVal={searchInputVal}
            setSearchInputVal={setSearchInputVal}
            products={products}
            inputStatus={inputStatus}
            setInputStatus={setInputStatus}
            cartItems={cartItems}
            user={user}
          />
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  products={products}
                  setInputStatus={setInputStatus}
                  likedItems={likedItems}
                  addToWishes={addToWishes}
                  cartItems={cartItems}
                  addToCart={addToCart}
                  AmountDisplay={AmountDisplay}
                />
              }
            />
            <Route
              path="products/:id"
              element={
                <Single
                  products={products}
                  likedItems={likedItems}
                  addToWishes={addToWishes}
                  setCartItems={setCartItems}
                  AmountDisplay={AmountDisplay}
                  cartItems={cartItems}
                />
              }
            />
            <Route
              path="/wishes"
              element={
                <Wishes
                  products={products}
                  likedItems={likedItems}
                  addToWishes={addToWishes}
                  cartItems={cartItems}
                  addToCart={addToCart}
                  user={user}
                  AmountDisplay={AmountDisplay}
                />
              }
            />
            <Route
              path="/cart"
              element={
                <Cart
                  products={products}
                  cartItems={cartItems}
                  deleteFromCart={deleteFromCart}
                  AmountDisplay={AmountDisplay}
                  setCartItems={setCartItems}
                />
              }
            />
            <Route
              path="/login"
              element={
                <Login uName={uName} setuName={setuName} setUser={setUser} />
              }
            />
          </Routes>
        </>
      }

      <Footer />
    </>
  );
}

export default App;
