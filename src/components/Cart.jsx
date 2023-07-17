import React from "react";
import CartItem from "./CartItem";
import { useSelector } from "react-redux/es/hooks/useSelector";
import EmptyCart from "./EmptyCart";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
const Cart = () => {
  const cartItems = useSelector((store) => {
    return store.cart.items;
  });
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return cartItems.length == 0 ? (
    <EmptyCart />
  ) : (
    <div className="w-2/5 border-2 border-purple-400 mx-auto p-4 my-8 rounded-md relative overflow-hidden ">
      <div>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold overflow-hidden text-purple-500">
            Cart
          </h2>
        </div>
        {cartItems.map((menu, index) => {
          return <CartItem key={index} menu={menu} count={index} />;
        })}
      </div>
      <button
        onClick={handleClearCart}
        className="absolute top-3 right-4 flex items-center gap-2 border px-2 py-2 bg-red-400 rounded-md hover:bg-red-300 transition duration-300"
      >
        <i className="fa-sharp fa-solid fa-trash text-[1.3rem] cursor-pointer text-red-600 hover:text-red-400 transition duration-300"></i>
        <span className="text-white">Clear Cart</span>
      </button>
    </div>
  );
};

export default Cart;
