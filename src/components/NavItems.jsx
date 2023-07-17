import React, { useState } from "react";
import { Link } from "react-router-dom";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
const NavItems = () => {
  const cartItems = useSelector((store) => {
    return store.cart.items;
  });
  const [isLogin, setIsLogin] = useState(
    localStorage.getItem("userAuthenticate") || "Login"
  );
  const userAuthenticate = () => {
    const updateVar = isLogin === "Login" ? "Logout" : "Login";
    localStorage.setItem("userAuthenticate", updateVar);
    setIsLogin(updateVar);
  };
  return (
    <ul className="nav-items">
      <Link to="/">
        <li>Home</li>
      </Link>
      <Link to="/about">
        <li>About</li>
      </Link>
      <Link to="/contact">
        <li>Contact</li>
      </Link>
      <Link to="/instamart">
        <li>Instamart</li>
      </Link>
      <Link to="/cart">
        <li className="relative">
          <i className="fa-sharp fa-solid fa-cart-shopping text-3xl"></i>
          <span className="absolute w-4  top-1 left-3 text-center text-blue-700 text-sm font-bold bg-white rounded-full">
            {cartItems.length}
          </span>
        </li>
      </Link>
      <p
        style={{
          backgroundColor: `${isLogin == "Login" ? "green" : "orange"}`,
        }}
        onClick={userAuthenticate}
      >
        {isLogin}
      </p>
    </ul>
  );
};
export default NavItems;
