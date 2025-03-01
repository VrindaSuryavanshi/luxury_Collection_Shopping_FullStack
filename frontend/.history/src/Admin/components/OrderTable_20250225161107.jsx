import React from 'react'
import { Grid2 } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllAdminOrders } from './../../State/admin/order/Action';

const OrderTable = () => {
    const dispatch = useDispatch();
    const {adminOrders} = useSelector(store => store);

    useEffect(() => {   
        dispatch(getAllAdminOrders());
    }, [])

    console.log("admin orders are ", adminOrders);
  return (
   <div>
         <Grid2 container>
              <Grid2 item>
                <h1>Orders</h1>
              </Grid2>
                <Grid2 item>
                    <h1>Orders</h1>
                </Grid2>
                </Grid2>
        </div>
   
  )
}

export default OrderTable