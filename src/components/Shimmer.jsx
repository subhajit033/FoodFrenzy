import React from "react";
import { RestaurantList } from "../constants";
const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {RestaurantList.map((restaurant) => {
        return (
          <div key={restaurant?.data.id} className="shimmer-card">
            <div className="img shine"></div>
            <div className="shimmer-description">
              <h3 className="shine"></h3>
              <p className="shine"></p>
              <div className="shimmer-prices">
                <p className="shine"></p>
                <i className="fa-sharp fa-solid fa-circle"></i>
                <p className="shine"></p>
                <i className="fa-sharp fa-solid fa-circle"></i>
                <p className="shine"></p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Shimmer;
