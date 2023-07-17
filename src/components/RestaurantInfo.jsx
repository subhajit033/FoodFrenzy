import React, { useEffect, useState } from "react";
import MenuItems from "./MenuItems";
import MenuShimmer from "./MenuShimmer";
import { useParams } from "react-router-dom";
import useRestaurantInfo from "../utils/useRestaurantInfo";
import useStatus from "../utils/useStatus";
import Status from "./Status";
import Popup from "./Popup";
const RestaurantInfo = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  if(isPopupVisible){
    setTimeout(()=>{
      setIsPopupVisible(false);
    }, 1000);
  }
  useEffect(()=>{
    window.scrollTo(0, 0);
  }, [])
  const { resId } = useParams();
  //to start the next webpage from top in any case
  const [resInfo, menuList] = useRestaurantInfo(resId);
  const isOnline = useStatus();
  if (!isOnline) {
    return <Status />;
  }
  return menuList?.length == 0 ? (
    <MenuShimmer />
  ) : (
    <div id="restaurant-menu">
      <div className="restaurant-menu">
        <div className="description">
          <h3>{resInfo?.name}</h3>
          <p>{resInfo?.cuisines?.join(" , ").toString()}</p>
          <p>
            <span>{resInfo?.areaName}</span> ,{" "}
            <span>{resInfo?.sla?.lastMileTravelString}</span>
          </p>
        </div>
        <div className="ratings">
          <p>
            <i className="fa-solid fa-star"></i>
            {resInfo?.avgRating ? resInfo?.avgRating : "-"}
          </p>
          <p></p>
          <p>
            {resInfo?.totalRatingsString
              ? resInfo?.totalRatingsString
              : "Too Few Ratings"}
          </p>
        </div>
      </div>

      <div className="time">
        <span>
          <i className="fa-solid fa-clock fa-spin"></i>{" "}
          <p>{resInfo?.sla?.deliveryTime} MINS</p>
        </span>
        <span>
          <i className="fa-solid fa-indian-rupee-sign"></i>
          <p>{resInfo?.costForTwo / 100} for Two</p>
        </span>
      </div>
      <h2 className="dish-type">Recommended dishes</h2>
      <div className="menu-container">
        {menuList?.map((menu, index) => {
          return (
            <MenuItems
              key={index}
              menu={menu}
              isPopupVisible={isPopupVisible}
              setIsPopupVisible={setIsPopupVisible}
            />
          );
        })}
      </div>
      <Popup isPopupVisible = {isPopupVisible} />
    </div>
  );
};
export default RestaurantInfo;
