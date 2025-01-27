import React , { useState ,useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { store } from './../../../State/Store';

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
    console.log("orderId", orderId);
  return (
    <div>PaymentSuccess</div>
  )
}

export default PaymentSuccess