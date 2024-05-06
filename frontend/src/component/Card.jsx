import React, { useState } from "react";
import a from "../Assets/a.jpg"

const Card = ({item}) => {
    // console.log(item)

    const [showFullDescription, setShowFullDescription] = useState(false);

    // Function to toggle full description
    const toggleDescription = () => {
      setShowFullDescription(!showFullDescription);
    };
  
    // Truncate the description if it's too long
    const truncatedDescription = showFullDescription
      ? item.description
      : item.description.slice(0, 50) + "...";
  return (
    <div className="my-1 md:my-8 px-3" >
      <div className="card bg-base-100 shadow-xl dark:bg-slate-900 dark:text-white dark:border-[1px] hover:scale-105 duration-200">
        <figure className="h-[450px]" >
          <img
          className="w-full h-full object-cover"
            src={a}
            // "https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>
          <p>{truncatedDescription}</p>
          {item.description.length > 50 && (
            <span className="cursor-pointer" onClick={toggleDescription}>
              {showFullDescription ? "Read Less" : "Read More"}
            </span>
          )}
          <div className="card-actions flex justify-between items-center">
            <div className="badge badge-outline">Rs. {item.price}</div>
            <div className="rounded-lg cursor-pointer px-3 py-2 bg-pink-500 text-white">Buy Now</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
