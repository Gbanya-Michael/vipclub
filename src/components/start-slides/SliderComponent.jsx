import React from "react";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div>
        <img src="slide1.svg" alt="Image 1" />
      </div>
      <div>
        <img src="slide2.svg" alt="Image 2" />
      </div>
      <div>
        <img src="slide3.svg" alt="Image 3" />
      </div>
    </Slider>
  );
};
export default function SliderComponent() {}
