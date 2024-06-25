import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Cartitem({
  cartItems,
  setCartItems,
  AmountDisplay,
  deleteFromCart,
  id,
  name,
  seller,
  images,
  newPrice,
  originalPrice,
}) {
  const [inpVal, setInpVal] = useState(
    cartItems.find((item) => item.id == id).amount
  );
  function updateCartItems(newAmount) {
    const newCartItems = cartItems.map((item) =>
      item.id == id ? { ...item, amount: newAmount } : item
    );
    setCartItems(newCartItems);
  }
  const increaseBtn = () => {
    setInpVal(inpVal + 1);
    updateCartItems(inpVal + 1);
  };
  const decreaseBtn = () => {
    if (inpVal > 1) {
      setInpVal(inpVal - 1);
      updateCartItems(inpVal - 1);
    }
  };
  return (
    <div className="info-container">
      <div className="info__img_check">
        <input type="checkbox" name="" id="checkAll" className="checkAll" />

        <div className="info_img">
          <Link to={`/products/${id}`}>
            <img src={images.main} alt="" />
          </Link>
        </div>
      </div>
      <div className="info__name_product">
        <div className="info__product_name">
          <span id="infoProductName" className="infoProductName">
            {name}
          </span>
        </div>
        <div className="info__product_admin">
          <span id="adminName" className="adminName">
            sotuvchi:{" "}
            <span id="" className="admin_home">
              {seller}
            </span>
          </span>
        </div>
      </div>
      <div className="info__delete_product">
        <div className="info__count">
          <i
            onClick={() => decreaseBtn()}
            className="fa-solid fa-minus decrease btn"
          ></i>

          <input
            className="amountinp"
            type="number"
            value={inpVal}
            // onChange={(e) => setInpVal(e.target.value)}
            readOnly
          />
          <i
            onClick={() => increaseBtn()}
            className="fa-solid fa-plus increase btn"
          ></i>
        </div>
        <div onClick={() => deleteFromCart(id)} className="info__delete">
          <div data-id="${data.id}" className="info__delete_box">
            <i className="fa-solid fa-trash-can" id="delete"></i>
            <p>Yo'q qilish</p>
          </div>
          <div className="info__delete_price">
            <span id="price" className="price">
              <AmountDisplay amount={newPrice * inpVal} /> so'm
            </span>
            <span id="priceNon" className="priceNon">
              <AmountDisplay amount={originalPrice * inpVal} /> so'm
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
