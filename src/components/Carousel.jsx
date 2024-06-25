import React from "react";
import Slider from "react-slick";

const Carousel = () => {
  const CustomPrevButton = ({ onClick }) => (
    <button className="custom-prev-button" onClick={onClick}>
      <div>
        <svg
          data-v-505d1b5c=""
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="#1f2026"
          xmlns="http://www.w3.org/2000/svg"
          className="ui-icon "
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.8106 20.4983C16.0857 20.1887 16.0579 19.7146 15.7483 19.4394L7.8789 12L15.7483 4.56055C16.0579 4.28536 16.0857 3.81131 15.8106 3.50172C15.5354 3.19213 15.0613 3.16425 14.7517 3.43944L6.25173 11.4394C6.09161 11.5818 6 11.7858 6 12C6 12.2142 6.09161 12.4182 6.25173 12.5605L14.7517 20.5605C15.0613 20.8357 15.5354 20.8079 15.8106 20.4983Z"
            fill="black"
          ></path>
        </svg>
      </div>
    </button>
  );

  const CustomNextButton = ({ onClick }) => (
    <button className="custom-next-button" onClick={onClick}>
      <div>
        <svg
          data-v-505d1b5c=""
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="#1f2026"
          xmlns="http://www.w3.org/2000/svg"
          className="ui-icon "
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.18945 20.4983C7.91426 20.1887 7.94215 19.7146 8.25174 19.4394L16.1211 12L8.25173 4.56055C7.94215 4.28536 7.91426 3.81131 8.18945 3.50172C8.46464 3.19213 8.93869 3.16425 9.24828 3.43944L17.7483 11.4394C17.9084 11.5818 18 11.7858 18 12C18 12.2142 17.9084 12.4182 17.7483 12.5605L9.24828 20.5605C8.93869 20.8357 8.46464 20.8079 8.18945 20.4983Z"
            fill="black"
          ></path>
        </svg>
      </div>
    </button>
  );
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    prevArrow: <CustomPrevButton />,
    nextArrow: <CustomNextButton />,
  };
  return (
    <div className="carousel-wrapper">
      <Slider {...settings}>
        <div>
          <img
            src="https://images.uzum.uz/cn4v33h25kub33f3c6bg/main_page_banner.jpg"
            alt="slide1"
          />
        </div>
        <div>
          <img
            src="https://images.uzum.uz/cn50hl125kub33f3cnhg/main_page_banner.jpg"
            alt="slide2"
          />
        </div>
        <div>
          <img
            src="https://images.uzum.uz/cn50lbh25kub33f3cog0/main_page_banner.jpg"
            alt="slide3"
          />
        </div>
        <div>
          <img
            src="https://images.uzum.uz/cn50jep25kub33f3co00/main_page_banner.jpg"
            alt="slide4"
          />
        </div>
        <div>
          <img
            src="https://images.uzum.uz/cn50mi9s99ouqbfu6dt0/main_page_banner.jpg"
            alt="slide5"
          />
        </div>
        <div>
          <img
            src="https://images.uzum.uz/cn51mprifoubkc6rkafg/main_page_banner.jpg"
            alt="slide6"
          />
        </div>
        <div>
          <img
            src="https://images.uzum.uz/cn50ddjifoubkc6rjsl0/main_page_banner.jpg"
            alt="slide7"
          />
        </div>
        <div>
          <img
            src="https://images.uzum.uz/cn50orp25kub33f3cphg/main_page_banner.jpg"
            alt="slide8"
          />
        </div>
        <div>
          <img
            src="https://images.uzum.uz/cn5190bifoubkc6rk5g0/main_page_banner.jpg"
            alt="slide9"
          />
        </div>
        <div>
          <img
            src="https://images.uzum.uz/cn50f29s99ouqbfu6brg/main_page_banner.jpg"
            alt="slide10"
          />
        </div>
        <div>
          <img
            src="https://images.uzum.uz/cn5kb3h25kub33f3g0t0/main_page_banner.jpg"
            alt="slide11"
          />
        </div>
        <div>
          <img
            src="https://images.uzum.uz/cn5kbd9s99ouqbfu9lqg/main_page_banner.jpg"
            alt="slide12"
          />
        </div>
        <div>
          <img
            src="https://images.uzum.uz/cn506vps99ouqbfu6930/main_page_banner.jpg"
            alt="slide13"
          />
        </div>
        <div>
          <img
            src="https://images.uzum.uz/cn50bfh25kub33f3clf0/main_page_banner.jpg"
            alt="slide14"
          />
        </div>
        <div>
          <img
            src="https://images.uzum.uz/cn51711s99ouqbfu6jh0/main_page_banner.jpg"
            alt="slide15"
          />
        </div>
        <div>
          <img
            src="https://images.uzum.uz/cmt8nt3ifoubkc6q5c5g/main_page_banner.jpg"
            alt="slide16"
          />
        </div>
        <div>
          <img
            src="https://images.uzum.uz/cmt4o4ps99ouqbfsms5g/main_page_banner.jpg"
            alt="slide17"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
