import React , { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const PaymentSuccess = () => {
    const [paymentId, setPaymentId] = useState();
    const [referenceId, setReferenceId] = useState();
    const [paymentStatus, setPaymentStatus] = useState();
    const {orderId} = useSearchParams();

    console.log("orderId", orderId);
  return (
    <div>PaymentSuccess</div>
  )
}

export default PaymentSuccess