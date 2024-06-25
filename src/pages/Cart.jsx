import React, { useEffect, useState } from "react";
import "../css/savat.css";
import { Link } from "react-router-dom";
import Cartitem from "../components/Cartitem";
export default function Cart({
  products,
  cartItems,
  deleteFromCart,
  AmountDisplay,
  setCartItems,
}) {
  const cartItemObjs = products.filter((item) =>
    cartItems.some((item2) => item2.id == item.id)
  );
  const calcCurrentTotal = () => {
    let totalPrice = 0;

    cartItems.forEach((cartItem) => {
      const item = cartItemObjs.find((obj) => obj.id === cartItem.id);
      if (item) {
        totalPrice += cartItem.amount * item.newPrice;
      }
    });

    return totalPrice;
  };
  const calcCurrentTotalDisc = () => {
    let totalOriginalPrice = 0;

    cartItems.forEach((cartItem) => {
      const item = cartItemObjs.find((obj) => obj.id === cartItem.id);
      if (item) {
        totalOriginalPrice += cartItem.amount * item.originalPrice;
      }
    });

    return totalOriginalPrice;
  };
  const [currentPrice, setCurrentPrice] = useState(calcCurrentTotal());
  const [discount, setDiscount] = useState(
    calcCurrentTotalDisc() - currentPrice
  );
  useEffect(() => {
    setCurrentPrice(calcCurrentTotal());
    setDiscount(calcCurrentTotalDisc() - currentPrice);
  }, [cartItems]);
  // console.log(currentPrice);
  return (
    <>
      <main id="basket" className="main__basket">
        {/* <!-- main ichidagi elementlar bir xil 1240 px ichida joylashishini taminlaydi --> */}
        {cartItems.length ? (
          <section
            id="main__basket_container"
            className="main__basket_container"
          >
            {/* <!-- boshlang'ich tepa qisim savat ichidagi elementlar nechtaligini aniqlash uchun ishlatiladi --> */}
            <div id="basket_texts" className="basket__container_texts">
              {/* <!-- h2 savat haqida span o'zgaruvchi son --> */}
              <h2 id="basketText" className="basket_text">
                Savatingiz,
                <span id="change" className="basket__span_text">
                  {" "}
                  {cartItems.length} mahsulot{" "}
                </span>
              </h2>
            </div>
            {/* <!-- Savatdagi elementlar tushadigan qisim --> */}
            <div id="productBox" className="basket__product">
              {/* <!-- elementlar tushadigan savatnng chap tomoni mahsulotlar korsatiladigan oyna --> */}
              <div id="productTable" className="product__left_teble">
                {/* <!-- belgilangan elementlarni hammasini checkbox bilan belgilash yezkazilish vaqti --> */}
                <div id="tableGet" className="product__left_teble-getAll">
                  {/* <!-- checkbox chap tomon bu bosilsa barca checkbox belgilanadi --> */}
                  <div id="" className="table__get">
                    {/* <!-- checkbo input bilan text joylashgan --> */}
                    <input
                      type="checkbox"
                      name=""
                      id="checkAll"
                      className="checkAll"
                    />
                    <p id="" className="chechText">
                      Hammasini yechish
                    </p>
                  </div>
                  {/* <!-- yetkazilish sanasi mavjud --> */}
                  <div id="" className="table__data">
                    {/* <!-- p hamda span style berib text yordamida posilka qachon yetkazilishi haqida malumot berilgan --> */}
                    <p id="dataText" className="data__text">
                      Yetkazib berishning eng yaqin sanasi:
                    </p>
                    <span id="" className="data__go">
                      M02 16 (Erta)
                    </span>
                  </div>
                </div>
                {/* <!--! bu qisimga asosan tovar rasmi chekck narxlari va turi malumotiyozliladi --> */}
                <div id="products-container">
                  {cartItemObjs.map((item) => {
                    return (
                      <div
                        key={item.id}
                        id="productInfo"
                        className="product__info"
                      >
                        <Cartitem
                          cartItems={cartItems}
                          setCartItems={setCartItems}
                          AmountDisplay={AmountDisplay}
                          deleteFromCart={deleteFromCart}
                          key={item.id}
                          {...item}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
              {/* <!-- elementlar narxini hisoblovchi sikidkali o'ng oyna --> */}
              <div id="productAction" className="product__right_action">
                <div className="action__container">
                  <div className="action__order">
                    <h4>Buyurtmangiz</h4>
                  </div>
                  <div className="action__order__numbers">
                    <div className="order-top">
                      <h5>
                        Mahsulotlar{" "}
                        <span id="demo" className="">
                          {cartItems.length}
                        </span>
                        ;
                      </h5>
                      <h5>
                        <span id="verySum">
                          <AmountDisplay amount={currentPrice} />
                        </span>{" "}
                        so'm
                      </h5>
                    </div>
                    <div className="order-bottom">
                      Yetkazib berish M02 16 (Erta)
                    </div>
                    <div className="order-total">
                      <div className="total__sum">
                        <div className="sum__left">
                          <p>
                            jami: <span id="very"></span>
                          </p>
                        </div>
                        <div className="sum__right">
                          <span id="" className="Jami">
                            <AmountDisplay amount={currentPrice} /> so'm
                          </span>
                          <p>
                            Tejovingiz:{" "}
                            <span className="Tejalgan">
                              {" "}
                              <AmountDisplay amount={discount} /> so'm
                            </span>
                          </p>
                        </div>
                      </div>
                      <button id="" className="total_btn">
                        Rasmiylashtirishga o'tish
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <div>
            <div className="noItem_wrapper">
              <img
                className="noItempic"
                src="https://uzum.uz/static/img/shopocat.490a4a1.png"
                alt=""
              />
              <div className="title">Savatda hozircha mahsulot yoʻq</div>
              <div className="info">
                Bosh sahifadagi to’plamlardan boshlang yoki kerakli mahsulotni
                qidiruv orqali toping
              </div>
              <Link to={"/"}>
                <button className="actionbtn">Bosh sahifaga</button>
              </Link>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
