import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import React from "react";
import List from "../Assets/List.json";
import Card from "./Card";

const FreeBook = () => {
  const filterData = List.filter((data) => data.category === "Free");
//   console.log(filterData);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 my-14">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">Some Free Books</h1>
        <p className="text-sm md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
          quaerat cum corrupti praesentium iure expedita quisquam blanditiis
          exercitationem quis quas veritatis et voluptate culpa earum tempore
          quod excepturi tempora aliquam eligendi, quia, soluta sequi error
          nesciunt! Doloribus maxime laboriosam ullam.
        </p>
      </div>
      <div className="slider-container mt-7">
      <Slider {...settings}>
        {filterData.map((item)=> (
            <Card item= {item} key={item.id} />
        ))}
      </Slider>
    </div>
    </div>
  );
};

export default FreeBook;
