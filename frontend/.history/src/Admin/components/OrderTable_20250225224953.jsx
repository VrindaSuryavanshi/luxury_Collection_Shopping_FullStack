import React from 'react'
import { Grid2 } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllAdminOrders } from './../../State/admin/order/Action';
import { Card, CardHeader, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar, Button } from '@mui/material';
import { AvatarGroup } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { confirmOrder, deleteOrder, cancelOrder, shipOrder, placeOrder, deliveredOrder } from './../../State/admin/order/Action';

const OrderTable = () => {
    const dispatch = useDispatch();
    const {adminOrders} = useSelector(store => store);

    useEffect(() => {   

        dispatch(getAllAdminOrders());
    }, [adminOrders.deletedOrder,adminOrders.placedOrder,adminOrders.shippedOrder,adminOrders.deliveredOrder,adminOrders.cancelledOrder ,adminOrders.confirmedOrder]);
    console.log("admin orders are ", adminOrders);
    const [anchorEl, setAnchorEl] = React.useState([]);
    const open = Boolean(anchorEl);

    const handleClick = (event,index) => {
        const newAnchor = [...anchorEl];
        newAnchor[index]=event.currentTarget;
      setAnchorEl(newAnchor);  
      };

    const handleClose = (index) => {
        const newAnchor = [...anchorEl];
        newAnchor[index]=null;
      setAnchorEl(newAnchor);
    };

    const handleConfirmOrder = (orderId) => {
        dispatch(confirmOrder(orderId));
        handleClose();
    };
    const handleDelete = (orderId) => {
        console.log("object deleted" , orderId);

        dispatch(deleteOrder(orderId));
        handleClose();
    }
    const handleCancelOrder = (orderId) => {
        dispatch(cancelOrder(orderId));
        handleClose();
    }
    const handleShipOrder = (orderId) => {
        dispatch(shipOrder(orderId));
        handleClose();
    }
    const handlePlaceOrder = (orderId) => { 
        dispatch(placeOrder(orderId));
        handleClose();
    }
     const handleDeliveredOrder = (orderId) => {
        console.log("object delivered " , orderId);

        dispatch(deliveredOrder(orderId));
        handleClose();

    }
    // const handlePendingOrder = (orderId) => {
    //     dispatch(pendingOrder(orderId));
    //     handleClose();
    // }
    // const handleReturnOrder = (orderId) => {
    //     dispatch(returnOrder(orderId));
    //     handleClose();
    // }
    // const handleExchangeOrder = (orderId) => {
    //     dispatch(exchangeOrder(orderId));
    //     handleClose();
    // }
    // const handleRefundOrder = (orderId) => {
    //     dispatch(refundOrder(orderId));  
    //     handleClose();

    // }


  return (
    <div className='p-6'>

    <Card>
      <CardHeader title='All Products' className='my-4' />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead className='bg-gray-400 text-slate-100 font-bold' sx={{ fontSize: '1.25rem' }}>
              <TableRow >
              <TableCell>Image</TableCell>
                <TableCell>Title</TableCell>
                <TableCell >Id</TableCell>
                <TableCell >Total Price</TableCell>
                <TableCell >Status</TableCell>
                <TableCell >Update</TableCell>
                <TableCell >Delete</TableCell>
    
              </TableRow>
            </TableHead>
            <TableBody>
              {adminOrders?.orders?.map((item,index) => (
                <TableRow
                  key={item.title}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row" >
                    <AvatarGroup max={4} sx={{ justifyContent: 'start' }}>
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
                  <TableCell ><span
                  className={`${
                       item.orderStatus === "Shipped"
                      ? "text-blue-500 bg-blue-800"
                      : item.orderStatus === "Delivered"
                      ? "text-green-500 bg-green-800"
                      : item.orderStatus === "Placed"
                      ? "fill-sky-500 bg-sky-800"
                      : item.orderStatus === "Confirmed"
                      ? "fill-orange-500 bg-orange-800"
                      : "text-red-500 bg-red-800"
                  } px-5 py-2 rounded-full`}
                  >{item.orderStatus}</span></TableCell>
                  
                  <TableCell >
                  <div>
      <Button
        id="basic-button"
        aria-haspopup="true"
        aria-controls={`basic-menu-${item.id}`}
        aria-expanded = {Boolean(anchorEl[index])}   
             onClick={(event)=>handleClick(event,index)}
      >
        Status
      </Button>
      <Menu
        id={`basic-menu-${item.id}`}
        anchorEl={anchorEl[index]}
        open={Boolean(anchorEl[index])}
        onClose={()=>handleClose(index)}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={()=>handlePlaceOrder(item.id)}>Placed</MenuItem>
        <MenuItem onClick={()=>handleShipOrder(item.id)}>Shipped</MenuItem>
        <MenuItem onClick={()=>handleDeliveredOrder(item.id)}>Delivered</MenuItem>
        <MenuItem onClick={()=>handleCancelOrder(item.id)}>Cancelled</MenuItem>
        <MenuItem onClick={()=>handleConfirmOrder(item.id)}>Confirmed</MenuItem>

      </Menu>
    </div>

                    </TableCell>
    
                  <TableCell >
                    <Button
                     onClick={()=>handleDelete(item.id)}
                     variant='outlined'
                     
                     > Delete </Button></TableCell>
    
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