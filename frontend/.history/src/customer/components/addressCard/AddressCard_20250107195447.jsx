import React from "react";
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {getOrderById} from '../../../State/order/Action';
import { useEffect } from 'react';
import Order from './../order/Order';

const AddressCard = () => {
  const dispatch =useDispatch();
    const location = useLocation()
    const searchParams = new URLSearchParams(location.search);
    const orderId = searchParams.get("order_id");
    const {order} = useSelector(store=>store);

    useEffect(()=>{
        dispatch(getOrderById(orderId));

    },[orderId]);
  return (
    <div>
      <div className="space-y-2 text-left">
        <h1 className="font-semibold text-lg opacity-50">Address :</h1>
        <p className="font-semibold">{order.order?.shippingAddress.firstName} shaha</p>
        <p className="text-sm">Mumbai ,Andheri , Andheri east , 676543</p>
        <div>
          <p className="space-y-1 text-sm">Phone Number</p>
          <p className="font-semibold text-sm">09876543224</p>
        </div>
      </div>
    </div>
  );
};

export default AddressCard;
