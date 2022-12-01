import "../assets/scss/plugins/_plugin-react-slick.scss";
import "../assets/scss/plugins/_partners_carousel.scss";
import React, { Component } from "react";

import Carousel from "react-slick";

import image1 from "../assets/img/WIL_logo.png";
import image2 from "../assets/img/Google_logo.png";
import image3 from "../assets/img/Instagram_logo.png";
import image4 from "../assets/img/Politechnika_Warszawska_logo.png";
import image5 from "../assets/img/Meta_logo.png";
import image6 from "../assets/img/Twitter_logo.png";

export default function SectionCarousel(){
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
  };
  return (
    <div>
        <Carousel {...settings}>
          <div>
            <img
              src={image1}
              alt="First slide"
              className="slick-image"
            />
          </div>
          <div>
            <img
              src={image2}
              alt="Second slide"
              className="slick-image"
            />
          </div>
          <div>
            <img
              src={image3}
              alt="Third slide"
              className="slick-image"
            />
          </div>
          <div>
            <img
              src={image4}
              alt="Fourth slide"
              className="slick-image"
            />
          </div>
          <div>
            <img
              src={image5}
              alt="Fifth slide"
              className="slick-image"
            />
          </div>
          <div>
            <img
              src={image6}
              alt="Sixth slide"
              className="slick-image"
            />
          </div>
        </Carousel>
  </div>
  );
}