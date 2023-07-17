import React, { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../constants";
import { useDispatch } from "react-redux";
import { removeItem } from "../utils/cartSlice";
const CartItem = ({ menu, count }) => {
  const [quantity, setQuantity] = useState(1);
  const [price, setprice] = useState(Number(menu?.card?.info?.price / 100));
  const priceForOne = Number(menu?.card?.info?.price / 100);
  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  const handleDecreaseQuantity = () => {
    quantity <= 1? setQuantity(1):setQuantity(quantity - 1);
  };
  useEffect(() => {
    priceOfItem();
  }, [quantity]);
  const priceOfItem = () => {
    setprice(quantity * priceForOne);
  };
  const dispatch = useDispatch();
  const handleRemoveItem = ()=>{
    dispatch(removeItem(menu));
  }
  return (
    <div className="cart-items flex justify-between items-center my-3 text-sm">
      <p className={`before:content-["${count + 1}."] before:mr-2 w-80 `}>
        {menu?.card?.info?.name}
      </p>
      <img
        className="w-20 border-2 border-purple-400 rounded-md"
        src={IMG_CDN_URL + menu?.card?.info?.imageId}
        alt="item_image"
      />
      <p className="flex items-center gap-2 border-2 border-gray-500 px-2 py-0.5 rounded-md">
        <i
          onClick={handleDecreaseQuantity}
          className={`fa-solid fa-minus text-sm  cursor-pointer ${quantity>1? "text-red-600": "text-gray-500"}`}
        ></i>
        <span>{quantity}</span>
        <i
          onClick={handleIncreaseQuantity}
          className="fa-solid fa-plus text-sm text-green-500 cursor-pointer"
        ></i>
      </p>
      <p className="before:content-['\20B9']">
        {menu?.card?.info?.price ? price : "-"}
      </p>
      <i onClick={handleRemoveItem} className="fa-sharp fa-solid fa-trash text-[1.3rem] cursor-pointer text-red-600 hover:text-red-400 transition duration-300"></i>
    </div>
  );
};

export default CartItem;
