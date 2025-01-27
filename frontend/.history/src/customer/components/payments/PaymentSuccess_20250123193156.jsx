import React , { useState } from 'react'
import { useParams } from 'react-router-dom';

const PaymentSuccess = () => {
    const [paymentId, setPaymentId] = useState();
    const [referenceId, setReferenceId] = useState();
    const [paymentStatus, setPaymentStatus] = useState();
    const orderId = useParams();

    console.log("orderId", orderId);
  return (
    <div>PaymentSuccess</div>
  )
}

export default PaymentSuccess