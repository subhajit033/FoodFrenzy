import React from "react";
import { IMG_CDN_URL } from "../constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
const MenuItems = ({ menu, isPopupVisible, setIsPopupVisible }) => {
  const dispatch = useDispatch();
  const handleAddItem = (menu) => {
    dispatch(addItem(menu));
    isPopupVisible ? setIsPopupVisible(false) : setIsPopupVisible(true);
  };
  return (
    <div className="menu-item-container">
      <div className="menu-item">
        <div className="dish-name">
          <h4 className="font-bold">{menu?.card?.info?.name}</h4>
          <p className="prices">
            {menu?.card?.info?.price ? menu?.card?.info?.price / 100 : "-"}
          </p>
          <p className="quantity leading-tight overflow-hidden">
            {menu?.card?.info?.description
              ? menu?.card?.info?.description
              : "--"}
          </p>
        </div>
        {menu?.card?.info?.imageId ? (
          <div className="h-24 relative">
            <img
              className=""
              src={IMG_CDN_URL + menu?.card?.info?.imageId}
              alt="food_image"
            />
            <button
              // we have to add an extra call back function if we directly called a function inside an eventListener
              onClick={() => {
                handleAddItem(menu);
              }}
              className="absolute bg-orange-500 text-white px-2 py-0.5 bottom-0 rounded-md text-sm left-8 hover:bg-orange-400 transition duration-300"
            >
              Add+
            </button>
          </div>
        ) : (
          <button
            onClick={() => {
              handleAddItem(menu);
            }}
            className=" bg-orange-500 text-white px-2 py-0.5 rounded-md text-sm  hover:bg-orange-400 transition duration-300 -translate-x-6"
          >
            Add+
          </button>
        )}
        {/* <img src={IMG_CDN_URL + menu?.card?.info?.imageId} alt="food_image" /> */}
      </div>
      <hr />
    </div>
  );
};
export default MenuItems;
