import React , { useState ,useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { store } from './../../../State/Store';
import {  updatePaymentRequest } from './../../../State/payment/Action';
import {getOrderById} from './../../../State/order/Action';
import { Alert, AlertTitle } from '@mui/material';
import OrderTracker from './../order/OrderTracker';
import { Grid } from '@mui/material';
const PaymentSuccess = () => {
    const [paymentId, setPaymentId] = useState();
    const [referenceId, setReferenceId] = useState();
    const [paymentStatus, setPaymentStatus] = useState();
    const orderId = useParams();

    const dispatch = useDispatch();
    const {order} = useSelector(store => store);

    useEffect(() => {
        const urlParam = new URLSearchParams(window.location.search);
        setPaymentId(urlParam.get('razorpay_payment_link_id'));
        setPaymentStatus(urlParam.get('razorpay_payment_link_status'));
    },[])

    useEffect(() => {
        const data = {orderId,paymentId};
        dispatch(getOrderById(orderId));
        dispatch(updatePaymentRequest(data));
    },[orderId,paymentId])
    console.log("orderId", orderId);
  return (
    <div className='px-2 lg:px-36'>
        <div className='flex flex-col justify-center items-center'>
           <Alert variant='standard'
           severity='success'
           xs={{mb:6 , width:'fit-content'}}>

            <AlertTitle>Payment Success</AlertTitle>
            Congratulation Your Order has been placed successfully!
              </Alert>
            </div>

            <OrderTracker activeStep={1} />
            <Grid container className='space-y-5 py-5 pt-20'>
                <Grid container item className='shadow-xl rounded-md p-5'
                sx={{alignItems:"center", justifyContent:"space-between"}}>
                    <Grid item xs={6}>
                        <div className='flex items-center space-x-2'>   
                            <img src={order?.orderItems[0]?.product?.image} alt='product' className='w-20 h-20 rounded-md' />
                        </div>
                        <h1 className='text-lg font-semibold'>Order Details</h1>
                    </Grid>
                    </Grid>

                </Grid>
    </div>
  )
}

export default PaymentSuccess