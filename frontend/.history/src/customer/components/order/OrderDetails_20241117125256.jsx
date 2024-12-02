import React from "react";
import AddressCard from "../addressCard/AddressCard";
import OrderTracker from "./OrderTracker";

const OrderDetails = () => {
  return (
    <div className="px-5 lg:px-20">
      <div className="font-bold text-xl py-7">
        <h1> Delivery Address</h1>
        <AddressCard />
      </div>
      <div className="border shadow-lg p-2">
        <OrderTracker activeStep={3} />
      </div>
      <div className="space-x-5">

      </div>
    </div>
  );
};

export default OrderDetails;
