import React from "react";
import CartItem from "./CartItem";

const Cart = () => {
  return (
    <div>
      <div className="lg:grid grid-cols-3 lg:px-1 bg-green-800 ">
        <div>
          <CartItem />
        </div>

        <div className="bg-green-800">
          <div className="border">right side</div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
