import React from "react";

const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center gap-3 my-6">
      <h1 className="text-5xl font-bold text-gray-600 overflow-hidden">
        Cart Is Empty
      </h1>
      <img
        className="w-2/6"
        src="https://img.freepik.com/premium-vector/shopping-cart-with-cross-mark-wireless-paymant-icon-shopping-bag-failure-paymant-sign-online-shopping-vector_662353-912.jpg"
        alt="empty-cart"
      />
    </div>
  );
};

export default EmptyCart;
