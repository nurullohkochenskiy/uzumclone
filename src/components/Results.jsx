import React from "react";
import { Link } from "react-router-dom";
export default function Results({ searchInputVal, products, inputStatus, setSearchInputVal }) {
  const filteredProducts = searchInputVal
    ? products.filter((item) =>
        item.name.toLowerCase().startsWith(searchInputVal.toLowerCase())
      )
    : [];
  return (
    <div className={`results-wrapper ${inputStatus ? "" : "hidden"}`}>
      <ul className="results-list">
        {filteredProducts.map((item, index) => {
          return (
            <li  key={index} className="result-item">
              <Link onClick={()=>setSearchInputVal("")} to={`products/${item.id}`}>
                <svg
                  data-v-c3c7a936=""
                  width="28"
                  height="28"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon-left"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.5 8.5C3.5 5.73858 5.73858 3.5 8.5 3.5C11.2614 3.5 13.5 5.73858 13.5 8.5C13.5 11.2614 11.2614 13.5 8.5 13.5C5.73858 13.5 3.5 11.2614 3.5 8.5ZM8.5 2C4.91015 2 2 4.91015 2 8.5C2 12.0899 4.91015 15 8.5 15C10.0247 15 11.4268 14.475 12.5353 13.596L16.7216 17.7823C17.0145 18.0752 17.4894 18.0752 17.7823 17.7823C18.0752 17.4894 18.0752 17.0145 17.7823 16.7217L13.596 12.5354C14.475 11.4268 15 10.0247 15 8.5C15 4.91015 12.0899 2 8.5 2Z"
                  ></path>
                </svg>
                <span className="suggest">{item.name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
