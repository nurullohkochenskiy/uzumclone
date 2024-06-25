import React from "react";
import Product from "../components/Product";
import "../css/likes.css";
import { Link } from "react-router-dom";
export default function Wishes({
  products,
  likedItems,
  addToWishes,
  addToCart,
  user,
  AmountDisplay
}) {
  const likedItemObjs = products.filter((item) => likedItems.includes(item.id));

  return (
    <div>
      <div className="main-content">
        <div className="ui-wrapper">
          {likedItemObjs.length > 0 && (
            <div className="ui-wrapper-header">
              <h1>Istaklarim</h1>
            </div>
          )}

          {likedItemObjs.length ? (
            <div id="products_list" className="products">
              {likedItemObjs.map((item) => {
                return (
                  <Product
                  AmountDisplay={AmountDisplay}
                    likedItems={likedItems}
                    addToWishes={addToWishes}
                    addToCart={addToCart}
                    key={item.id}
                    {...item}
                  />
                );
              })}
            </div>
          ) : user ? (
            <div className="noItem_wrapper">
              <img
                className="noItempic"
                src="https://uzum.uz/static/img/hearts.cf414be.png"
                alt=""
              />
              <div className="title">Sizga yoqqanini qoʻshing</div>
              <div className="info">
                Bosh sahifaga oʻting va mahsulotdagi ♡ belgisini bosing
              </div>
              <Link to={"/"}>
                <button className="actionbtn">Bosh sahifaga</button>
              </Link>
            </div>
          ) : (
            <div className="noItem_wrapper">
              <img
                className="noItempic"
                src="https://uzum.uz/static/img/hearts.cf414be.png"
                alt=""
              />
              <div className="title">Sizga yoqqanini qoʻshing</div>
              <div className="info">
                Mahsulotdagi ♡ belgisini bosing. Akkauntga kiring va barcha
                saralanganlar saqlanib qoladi
              </div>
              <Link to={"/login"}>
                <button className="actionbtn">Akkauntga kirish</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
