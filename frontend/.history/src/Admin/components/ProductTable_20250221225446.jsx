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

const ProductTable = () => {
  const dispatch = useDispatch();
  const {products} = useSelector(store => store);

  // console.log(" product data is ", products);

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
    pageNumber :1,
    pageSize :5  
   }
   
   dispatch(findProducts(data));
  },[]);
  // useEffect(() => {
  // const data = {          
  //   color: [],
  //   size :  [], 
  //   minPrice:0,
  //   maxPrice:10000000,
  //   minDiscount :  0,
  //   category : "",
  //   sort :  "price_low" ,
  //   stock : "",
  //   pageNumber :1,
  //   pageSize :1  
  //  }
   
  //  dispatch(findProducts(data));
  // },[]);
  return (
    <div className='p-5'>
       <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow className='bg-gray-200 text-red-950 font-bold '>
            <TableCell>Title</TableCell>
            <TableCell align="right">Id</TableCell>
            <TableCell align="right">Category</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Quantity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products?.products?.content?.map((item) => (
            <TableRow
              key={item.title}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {item.title}
              </TableCell>
              <TableCell align="right">{item.id}</TableCell>
              <TableCell align="right">{item.category.name}</TableCell>
              <TableCell align="right">{item.price}</TableCell>
              <TableCell align="right">{item.quantity}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default ProductTable