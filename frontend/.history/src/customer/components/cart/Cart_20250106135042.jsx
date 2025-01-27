import React  , { useEffect } from "react";
import {useDispatch , useSelector} from "react-redux"
import CartItem from "./CartItem";
import { Button } from "@headlessui/react";
import { useNavigate } from "react-router-dom";
import { getCart } from "../../../State/cart/Action";

const Cart = () => {
  const navigate = useNavigate();
    const dispatch = useDispatch();
    const {cart} = useSelector(store=>store);

  const handleCheckOut = () => {
    navigate("/checkout?step=2");
  };

  useEffect(()=>{
    dispatch(getCart());

  },[cart.updateCartItem , cart.deleteCartItem])
  return (
    <div>
      <div className="lg:grid grid-cols-3 lg:px-16 mt-4 relative">
        <div className="col-span-2">
          {cart.cart?.cartItems.map((item) => (
            <CartItem key={item.id} item={item}/>
          ))}
        </div>

        <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
          <div className="border">
            <p className="uppercase font-bold opacity-60  text-left p-2">
              Price Details
            </p>
            <hr />
            <div className="space-y-3 font:bold p-2 mb-7">
              <div className="flex justify-between pt-3 text-black">
                <span>Price</span>
                <span>₹{cart.cart?.totalPrice}</span>
              </div>

              <div className="flex justify-between pt-3 text-black">
                <span>Discount</span>
                <span className="text-green-500">-₹{cart.cart?.discount}</span>
              </div>

              <div className="flex justify-between pt-3 text-black">
                <span>Delivery Charge</span>
                <span className="text-green-500">Free</span>
              </div>

              <div className="flex justify-between pt-3 text-black font-bold">
                <span>Total Amount</span>
                <span className="text-green-500 ">₹{cart.cart?.totalDiscountedPrice}</span>
              </div>
            </div>

            <Button
              onClick={handleCheckOut}
              variant="contained"
              className="w-full bg-purple-500 p-2 border rounded-md font-semibold"
              sx={{ px: "2.5rem", py: ".7rem" }}
            >
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
