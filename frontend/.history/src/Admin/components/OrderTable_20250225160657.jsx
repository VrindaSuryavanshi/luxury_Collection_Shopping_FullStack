import React from 'react'
import { Grid2 } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react-router-dom';
import { getAllAdminOrders } from './../../State/admin/order/Action';

const OrderTable = () => {
    const dispatch = useDispatch();
    const {adminOrders} = useSelector(store => store);

    useEffect(() => {   
        dispatch(getAllAdminOrders());
    }, [])

    console.log("admin orders are ", adminOrders.orders);
  return (
   
   
  )
}

export default OrderTable