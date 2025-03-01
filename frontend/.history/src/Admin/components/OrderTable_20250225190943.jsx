import React from 'react'
import { Grid2 } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllAdminOrders } from './../../State/admin/order/Action';
import { Card, CardHeader, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar, Button } from '@mui/material';
import { AvatarGroup } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const OrderTable = () => {
    const dispatch = useDispatch();
    const {adminOrders} = useSelector(store => store);

    useEffect(() => {   

        dispatch(getAllAdminOrders());
    }, [])
    console.log("admin orders are ", adminOrders);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
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
              {adminOrders?.orders?.map((item) => (
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
                    item.orderStatus === "Placed"
                      ? "text-yellow-500"
                      : item.orderStatus === "Shipped"
                      ? "text-blue-500"
                      : item.orderStatus === "Delivered"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                  >{item.orderStatus}</span></TableCell>

                  
                  <TableCell >
                  <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Status
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Placed</MenuItem>
        <MenuItem onClick={handleClose}>shipped</MenuItem>
        <MenuItem onClick={handleClose}>Delivered</MenuItem>
        <MenuItem onClick={handleClose}>Cancelled</MenuItem>

      </Menu>
    </div>

                    </TableCell>
    
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