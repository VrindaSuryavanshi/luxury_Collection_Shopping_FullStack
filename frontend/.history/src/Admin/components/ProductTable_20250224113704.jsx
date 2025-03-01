import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch } from 'react-redux';
import { findProducts } from "../../State/product/Action";
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { color } from './../../customer/components/product/FilterData';
import { Avatar, Card, CardHeader } from '@mui/material';
import { Button } from '@mui/material';

const ProductTable = () => {
  const dispatch = useDispatch();
  const {products} = useSelector(store => store);

  console.log(" product data is ", products);

  useEffect(() => {
  const data = {          
    color: [],
    size :  [], 
    minPrice:0,
    maxPrice:10000000,
    minDiscount :  0,
    category : "",
    sort :  "price_low" ,
    stock : "",
    pageNumber :2,
    pageSize :10 
   }
   
   dispatch(findProducts(data));
  },[]);
  
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
          {products?.products?.content?.map((item) => (
            <TableRow
              key={item.title}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="right">
                <Avatar src={item.imageUrl} />
               
              </TableCell>
              <TableCell component="th" scope="row">
                {item.title}
              </TableCell>
              <TableCell >{item.id}</TableCell>
              <TableCell >{item.category.name}</TableCell>
              <TableCell >{item.price}</TableCell>
              <TableCell >{item.quantity}</TableCell>
              <TableCell ><Button variant='outlined'> Delete </Button></TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
</Card>

     
    </div>
  )
}

export default ProductTable