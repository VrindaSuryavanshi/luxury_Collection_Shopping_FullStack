import React from "react";
import CartItem from "./CartItem";

const Cart = () => {
  return (
    <div>
      <div className="flex flex-wrap lg:px-1 bg-green-800 ">
        <div>
          <CartItem />
          
          right side
       
        </div>

        
      </div>
    </div>
  );
};

export default Cart;
