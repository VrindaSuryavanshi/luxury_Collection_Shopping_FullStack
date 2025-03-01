import React from 'react'
import { Grid2 } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllAdminOrders } from './../../State/admin/order/Action';
import { Card, CardHeader, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar, Button } from '@mui/material';
import { AvatarGroup } from '@mui/material';
const OrderTable = () => {
    const dispatch = useDispatch();
    const {adminOrders} = useSelector(store => store);

    useEffect(() => {   

        dispatch(getAllAdminOrders());
    }, [])
    console.log("admin orders are ", adminOrders);

  return (
    <div className='p-4'>

    <Card>
      <CardHeader title='All Products' className='my-4' />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead className='bg-gray-400 text-slate-100 font-bold' sx={{ fontSize: '1.25rem' }}>
              <TableRow >
              <TableCell>Image</TableCell>
                <TableCell>Title</TableCell>
                <TableCell >Id</TableCell>
                <TableCell >Category</TableCell>
                <TableCell >Price</TableCell>
                <TableCell >Quantity</TableCell>
                <TableCell >Delete</TableCell>
    
              </TableRow>
            </TableHead>
            <TableBody>
              {adminOrders?.orders?.map((item) => (
                <TableRow
                  key={item.title}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row" align="right">
                    <AvatarGroup max={4} sx={{ justifyContent: 'center' }}>
                    {
                        item.orderItems.map((orderItem)=>(<Avatar src={orderItem.product.imageUrl} />))
                    }
                    </AvatarGroup>
                  </TableCell>
                  <TableCell component="th" scope="row">
                  {
                        item.orderItems.map((orderItem)=>(<p> {orderItem.product.title} </p>))
                    }
                  </TableCell>
                  <TableCell >{item.id}</TableCell>
                  <TableCell >{item.totalPrice }</TableCell>
                  <TableCell >{item.orderStatus}</TableCell>
                  <TableCell >
                    <Button
                    // onClick={()=>handleDelete(item.id)}
                     variant='outlined'> Delete </Button></TableCell>
    
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    </Card>
    
         
        </div>
   
  )
}

export default OrderTable