import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { store } from "./../../../State/Store";
import { updatePaymentRequest } from "./../../../State/payment/Action";
import { getOrderById } from "./../../../State/order/Action";
import { Alert, AlertTitle } from "@mui/material";
import OrderTracker from "./../order/OrderTracker";
import { Grid2 } from "@mui/material";
import AddressCard from "./../addressCard/AddressCard";
const PaymentSuccess = () => {
  const [paymentId, setPaymentId] = useState();
  const [referenceId, setReferenceId] = useState();
  const [paymentStatus, setPaymentStatus] = useState();
  const orderId = useParams();

  const dispatch = useDispatch();
  const { order } = useSelector((store) => store);
  console.log("order in success", order.order);

  useEffect(() => {
    const urlParam = new URLSearchParams(window.location.search);
    setPaymentId(urlParam.get("razorpay_payment_link_id"));
    setPaymentStatus(urlParam.get("razorpay_payment_link_status"));
  }, []);

  useEffect(() => {
    const data = { orderId, paymentId };
    dispatch(getOrderById(orderId.orderId));
    dispatch(updatePaymentRequest(data));
  }, [orderId, paymentId]);
  console.log("orderId", orderId);
  return (
    <div className="px-2 lg:px-36">
      <div className="flex flex-col justify-center items-center">
        <Alert
        className='mb-6'
          variant="standard"
          severity="success"
          xs={{ mb: 6, width: "fit-content" }}
        >
          <AlertTitle>Payment Success</AlertTitle>
          Congratulation Your Order has been placed successfully!
        </Alert>
      </div>

      <OrderTracker activeStep={1} />
      <div>
        <h1>order Details</h1>
      </div>
      <Grid2 container className="space-y-5 py-5 pt-20 ">
        {order.order?.orderItems.map((item) =>  <Grid2 container item
        className='shadow-xl rounded-md p-5 w-full'
        sx={{alignItems:"center", justifyContent:'space-between'}} >
          <Grid2 item xs={6}>
            <div className="flex  items-center">
               
              <img
                className="w-[5rem] h-[5rem] object-cover object-top"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXZKow6hgcxQRMNYsmQykSgeHtis9wSVPYRg&s"
                alt=""
                className="w-24 h-24"
                  />
           <div className="ml-5 space-y-2">
                        <p className="font-semibold">{item.product.title}</p>

            <div className='opacity-50 text-xm font-semibold space-x-5'>
              <p className="text-sm">Color : {item.color}</p>
              <p className="font-semibold">Size :{item.size}}</p>
              </div>
              <p className="font-semibold">Seller : {item.product.brand}</p>
              <p>Price : {item.price}</p>
            </div>
            </div>
            </Grid2>
            <Grid2 item>
              {" "}
              <AddressCard address={order.order.shippingAddress} />
            </Grid2>

            </Grid2>

          
        )}
      </Grid2>
    </div>
  )
};

export default PaymentSuccess;
