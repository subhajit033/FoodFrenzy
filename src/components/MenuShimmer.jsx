import React from "react";

const MenuShimmer = () => {
  return (
    <div className="menu-shimmer-container">
      {Array(10)
        .fill(" ")
        .map((ele, index) => {
          return (
            <div key={index} className="menu-shimmer">
              <div>
                <p className="shine"></p>
                <p className="shine"></p>
                <p className="shine"></p>
              </div>
              <div className="shine box"></div>
            </div>
          );
        })}
    </div>
  );
};
export default MenuShimmer;
