import React from "react";
import { IMG_CDN_URL } from "../constants";
import { Link } from "react-router-dom";
const RestaurentCard = ({ restaurant, url }) => {
  return (
    <div className="card">
      <Link to={`/restaurant/${url}`}>
        <img
          src={IMG_CDN_URL + restaurant?.data?.cloudinaryImageId}
          alt="foodImage"
        />
      </Link>
      <div className="description">
        <h3 className="font-bold">{restaurant?.data?.name}</h3>
        <p>{restaurant?.data?.cuisines?.join(", ").toString()}</p>
        <div className="prices">
          <p
            style={{
              backgroundColor: `${
                parseInt(restaurant?.data?.avgRating) >= 4
                  ? "green"
                  : "chocolate"
              }`,
            }}
          >
            <i className="fa-solid fa-star"></i> {restaurant?.data?.avgRating}
          </p>
          <i className="fa-sharp fa-solid fa-circle"></i>
          <p>{restaurant?.data?.slaString}</p>
          <i className="fa-sharp fa-solid fa-circle"></i>
          <p>{restaurant?.data?.costForTwoString}</p>
        </div>
      </div>
    </div>
  );
};
export default RestaurentCard;
