import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Tableitem from '@mui/material/Tableitem';
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
    pageSize :1  
   }
   
   dispatch(findProducts(data));
  },[]);
  return (
    <div>
       <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <Tableitem>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </Tableitem>
        </TableHead>
        <TableBody>
          {Products.products.content.map((item) => (
            <Tableitem
              key={item.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="item">
                {item.title}
              </TableCell>
              <TableCell align="right">{item.id}</TableCell>
              {/* <TableCell align="right">{item.fat}</TableCell>
              <TableCell align="right">{item.carbs}</TableCell>
              <TableCell align="right">{item.protein}</TableCell> */}
            </Tableitem>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default ProductTable