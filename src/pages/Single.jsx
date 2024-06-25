import React, { useState } from "react";
import { useParams } from "react-router-dom";

export default function single({
  products,
  likedItems,
  addToWishes,

  setCartItems,
  AmountDisplay,
  cartItems,
}) {
  const { id } = useParams();
  const sItem = products.find((item) => item.id == id);
  const [currentPhoto, setCurrentPhoto] = useState(sItem.images.main);
  const [inpVal, setInpVal] = useState(1);
  const inpSub = () => {
    if (inpVal > 1) {
      setInpVal(inpVal - 1);
    }
  };
  function addToCartfix() {
    if (inpVal > 0) {
      const newArr = cartItems.filter(
        (item) => Number(item.id) !== Number(sItem.id)
      );
      setCartItems([...newArr, { id: sItem.id, amount: inpVal }]);
    }
  }
  return (
    <div className="single_wrappermain">
      <div className="container info__wrapper">
        {/* <!--! Chap tomoni  --> */}
        <div className="product__photo">
          <div id="slider" className="slider">
            <img
              onClick={() => setCurrentPhoto(sItem.images.main)}
              src={sItem.images.main}
              alt=""
            />
            {sItem.images.additionals.map((img, index) => (
              <img
                onClick={() => setCurrentPhoto(img)}
                key={index}
                src={img}
                alt=""
              />
            ))}
          </div>
          <div className="main__photo">
            <img id="mainphoto" src={currentPhoto} alt="" />
          </div>
        </div>
        {/* <!--! Chap tomoni oxiri --> */}
        {/* <!--! O'ng tomoni --> */}
        <div className="info__container">
          <div className="info-block">
            <div className="first__line">
              <div className="orders">
                <img
                  src="data:image/svg+xml,%3csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath d='M9 12.9525L13.635 15.75L12.405 10.4775L16.5 6.93L11.1075 6.4725L9 1.5L6.8925 6.4725L1.5 6.93L5.595 10.4775L4.365 15.75L9 12.9525Z' fill='%23F5A623'/%3e %3c/svg%3e"
                  alt=""
                />
                <span>
                  {sItem.rating} ( {sItem.sharh} ){" "}
                </span>
                <span>{sItem.orders} ta buyurtma</span>
              </div>
              <div className="likes">
                {likedItems.includes(Number(id)) ? (
                  <button onClick={() => addToWishes(Number(id))}>
                    <svg
                      data-v-1a3a46a8=""
                      width="18px"
                      height="18px"
                      viewBox="0 0 19 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="ui-icon  filled"
                    >
                      <path
                        d="M5.45 0.169434C8.01792 0.169434 9.5 2.32178 9.5 2.32178C9.5 2.32178 10.985 0.169434 13.55 0.169434C16.205 0.169434 18.5 2.23943 18.5 5.11943C18.5 9.34995 12.0604 13.7892 9.86509 15.7297C9.65819 15.9126 9.34179 15.9126 9.13488 15.7297C6.94056 13.7903 0.5 9.34976 0.5 5.11943C0.5 2.23943 2.795 0.169434 5.45 0.169434Z"
                        fill="#7000ff"
                      ></path>
                    </svg>
                    <span>Istaklarda</span>
                  </button>
                ) : (
                  <button onClick={() => addToWishes(Number(id))}>
                    <svg
                      data-v-ff0a7354=""
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      alt="like"
                      className="ui-icon "
                    >
                      <path
                        d="M5.95 2C8.51792 2 10 4.15234 10 4.15234C10 4.15234 11.485 2 14.05 2C16.705 2 19 4.07 19 6.95C19 11.1805 12.5604 15.6197 10.3651 17.5603C10.1582 17.7432 9.84179 17.7432 9.63488 17.5603C7.44056 15.6209 1 11.1803 1 6.95C1 4.07 3.295 2 5.95 2Z"
                        fill="white"
                        fillOpacity="0.8"
                      ></path>
                      <path
                        d="M1 6.86486C1 4.20297 3.15017 2 5.86486 2C7.98685 2 9.35921 3.35876 10 4.18673C10.6408 3.35876 12.0132 2 14.1351 2C16.8506 2 19 4.20302 19 6.86486C19 8.02987 18.5328 9.18622 17.8534 10.265C17.1716 11.3476 16.252 12.3903 15.29 13.3377C13.9567 14.6508 12.4757 15.8387 11.4134 16.6907C10.9618 17.0529 10.5859 17.3544 10.3293 17.579C10.1407 17.7439 9.85926 17.7439 9.67075 17.579C9.41405 17.3544 9.03815 17.0529 8.58659 16.6907C7.52431 15.8387 6.04326 14.6508 4.70997 13.3377C3.74802 12.3903 2.82836 11.3476 2.14659 10.265C1.46724 9.18622 1 8.02987 1 6.86486ZM5.86486 3C3.70929 3 2 4.74838 2 6.86486C2 7.76743 2.36553 8.73607 2.99277 9.73208C3.61759 10.7242 4.47833 11.706 5.41165 12.6252C6.71033 13.9042 8.08423 15.005 9.13396 15.8461C9.45728 16.1052 9.74985 16.3396 10 16.547C10.2501 16.3396 10.5427 16.1052 10.866 15.8461C11.9158 15.005 13.2897 13.9042 14.5883 12.6252C15.5217 11.706 16.3824 10.7242 17.0072 9.73208C17.6345 8.73607 18 7.76743 18 6.86486C18 4.74833 16.2914 3 14.1351 3C12.0406 3 10.8181 4.70211 10.5033 5.21028C10.2727 5.5825 9.72727 5.58249 9.4967 5.21027C9.1819 4.7021 7.95944 3 5.86486 3Z"
                        fill="#15151A"
                      ></path>
                    </svg>
                    <span>Istaklarga</span>
                  </button>
                )}
              </div>
            </div>
            <div className="second-line">
              <h1>{sItem.name}</h1>
            </div>
            <div className="third-line">
              <div>Sotuvchi:</div>
              <div className="seller">{sItem.seller}</div>
            </div>
            <div className="fourth-line">
              <div>
                Yetkazib berish:
                <span>
                  <img
                    src="data:image/svg+xml,%3csvg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath fill-rule='evenodd' clip-rule='evenodd' d='M7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14ZM8.00003 3.5C8.00003 4.05229 7.55231 4.5 7.00003 4.5C6.44774 4.5 6.00003 4.05229 6.00003 3.5C6.00003 2.94772 6.44774 2.5 7.00003 2.5C7.55231 2.5 8.00003 2.94772 8.00003 3.5ZM6.10012 5.79844C5.76875 5.79844 5.50012 6.06707 5.50012 6.39844C5.50012 6.72981 5.76875 6.99844 6.10012 6.99844H6.40008V9.80235H5.60159C5.27022 9.80235 5.00159 10.071 5.00159 10.4023C5.00159 10.7337 5.27022 11.0023 5.60159 11.0023H8.40155C8.73292 11.0023 9.00155 10.7337 9.00155 10.4023C9.00155 10.071 8.73292 9.80235 8.40155 9.80235H7.60008V6.39844C7.60008 6.06707 7.33146 5.79844 7.00008 5.79844H6.10012Z' fill='%23CACBCE'/%3e %3c/svg%3e"
                    alt=""
                  />
                </span>
              </div>
              <div>1 kun, bepul</div>
            </div>
          </div>
          {/* <!--! Chiziq --> */}
          <div className="section-line"></div>
          {/* <!--! Chiziq --> */}
          <div>Miqdor:</div>
          <div className="amount">
            <div className="amountinp">
              <div onClick={() => inpSub()} className="minus">
                <i></i>
              </div>
              <input
                id="text"
                type="number"
                value={inpVal}
                // onChange={(e) => setInpVal(e.target.value)}
                readOnly
              />
              <div onClick={() => setInpVal(inpVal + 1)} className="plus">
                <i></i>
              </div>
            </div>
            <div className="amountleft">Sotuvda {sItem.stock} dona bor</div>
          </div>
          <div>Narx:</div>
          <div className="prices">
            <div className="currentPrice">
              <AmountDisplay amount={sItem.newPrice * inpVal} /> so'm
            </div>
            <div className="oldPrice">
              <AmountDisplay amount={sItem.originalPrice * inpVal} /> so'm
            </div>
            <div className="badges">
              <div className="aksiya">Aksiya</div>
            </div>
          </div>
          <div className="installment">
            <div className="permonth">
              <span>
                Oyiga <AmountDisplay amount={sItem.monthly * inpVal} /> so'mdan
              </span>
              muddatli to'lov
            </div>

            <svg
              width="24"
              height="24"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ui-icon installment-icon-chevron"
            >
              <path
                d="M18 14C18 14.3672 17.8013 14.4996 17.5508 14.7305L11.5 20.3242C11.3032 20.5195 11.1211 20.75 10.7266 20.75C10.4492 20.75 10 20.5352 10 19.9492C10 19.5859 10.2942 19.4151 10.5 19.2109L16.1172 14L10.4922 8.78125C10.2954 8.57705 9.99609 8.42578 9.99609 8C9.99609 7.66406 10.2578 7.25 10.793 7.25C11.0882 7.25 11.3579 7.52734 11.5547 7.72266L17.5508 13.25C17.8013 13.4897 18 13.6328 18 14Z"
                fill="#76797F"
                fillOpacity="0.6"
              ></path>
            </svg>
          </div>
          <div className="btns">
            <button onClick={() => addToCartfix()} className="add-to-cart">
              <div>Savatga qo'shish</div>
            </button>
            <button className="cta-2">Tugmani 1 bosishda xarid qilish</button>
          </div>
          <div className="weeklysale">
            <div className="block-part--motivation">
              <div className="weeklysale-text">
                <div>
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14 4.5C12.2402 4.5 11 5.88779 11 7.5H17C17 5.88779 15.7598 4.5 14 4.5ZM9.5 11.5V9H7.5V14.25C7.5 14.6642 7.16421 15 6.75 15C6.33578 15 6 14.6642 6 14.25V8.25V7.5H6.75H9.5C9.5 5.11221 11.3598 3 14 3C16.6402 3 18.5 5.11221 18.5 7.5H21.25H22V8.25V21.75C22 22.9926 20.9926 24 19.75 24H15.25C14.8358 24 14.5 23.6642 14.5 23.25C14.5 22.8358 14.8358 22.5 15.25 22.5H19.75C20.1642 22.5 20.5 22.1642 20.5 21.75V9H18.5V11.5H17V9H11V11.5H9.5ZM14.2738 18.0323C14.5667 17.7395 14.5667 17.2646 14.2738 16.9717C13.9809 16.6788 13.506 16.6788 13.2131 16.9717L7.99548 22.1893L5.78034 19.9742C5.48744 19.6813 5.01257 19.6813 4.71967 19.9741C4.42678 20.267 4.42677 20.7419 4.71966 21.0348L7.46513 23.7803C7.60579 23.921 7.79655 24 7.99547 24C8.19438 24 8.38515 23.921 8.5258 23.7803L14.2738 18.0323Z"
                      fill="#141415"
                    ></path>
                  </svg>
                </div>
                Bu haftada {sItem.thisWeek} kishi sotib oldi
              </div>
            </div>
          </div>
          <div className="short-info-block">
            <div className="short-about">
              <div className="short-title">Maxsulot haqida qisqacha:</div>
              <div className="short-info-content">
                <ul>
                  {sItem.info.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* <!--! O'ng tomoni oxiri --> */}
      </div>
    </div>
  );
}
