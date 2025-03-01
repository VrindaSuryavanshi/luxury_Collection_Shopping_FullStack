import React from "react";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { createProduct } from './../../State/product/Action';
import { Fragment } from "react";
import { useEffect } from "react";
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { FormControl } from '@mui/material';
import { InputLabel } from '@mui/material';
import { Select } from '@mui/material';
import { MenuItem } from '@mui/material';
import { useSelector } from "react-redux";

const initialSizes = [
  {
    name: "XS",
    quantity: 0,
  },
  {
    name: "S",
    quantity: 0,
  },
  {
    name: "M",
    quantity: 0,
  },
  {
    name: "L",
    quantity: 0,
  },
];
const CreateProduct = () => {
  const [productData, setProductData] = useState({
    title: "",
    description: "",
    price: "",
    discountedPrice: "",
    discountPresent: "",
    quantity: "",
    brand: "",
    color: "",
    size: initialSizes,
    imageUrl: "",
    topLevelCategory: "",
    secondLevelCategory: "",
    thirdLevelCategory: "",
  });

  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");

  const handleChanges = (e)=>{

    const [name , value] = e.target;
    setProductData((preState)=>({
      ...preState,
      [name] : value,
    }))
  }

  const handleSizeQuantity = (e,index)=>{
    const {name , value} = e.target;

    name==="size_quantity" ? name="quantity" : name=e.target.name;
    const sizes = [...productData.size];
    sizes[index][name] = value;    
    setProductData((preState)=>({
      ...preState,
      size: sizes,
    }))
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    dispatch(createProduct(productData));
  }

  return <Fragment>
    <Typography variant='h4' className='text-center'>
      Create New Product
    </Typography>
    <form onSubmit={handleSubmit} className='min-h-screen'>
      <Grid container spacing={2} className='p-4'>
        <Grid item size={{xs:12}}>
          <TextField 
          label='image url'
          fullWidth
          name='imageUrl'
          value={productData.imageUrl}
          onChange={handleChanges}
          />
        </Grid>
        <Grid item size={{ xs: 12, sm: 6 }}>
          <TextField 
          label='Brand'
          fullWidth
          name='brand'
          value={productData.brand}
          onChange={handleChanges}
          />  

        </Grid>
        <Grid item size={{xs:12 , sm:6}}>
          <TextField 
          label='Color'
          fullWidth
          name='color'
          value={productData.color}
          onChange={handleChanges}
          />

        </Grid>
        <Grid item size={{xs:12 , sm:6}}>
          <TextField 
          label='Title'
          fullWidth
          name='title'
          value={productData.title}
          onChange={handleChanges}
          />    
        </Grid>
        <Grid item size={{xs:12 , sm:6}}>
          <TextField 
          label='Description'
          fullWidth
          name='description'
          value={productData.description}
          onChange={handleChanges}
          />    
        </Grid>
        <Grid item size={{xs:12 , sm:6}}>
          <TextField 
          label='Price'
          fullWidth
          name='price'
          value={productData.price}
          onChange={handleChanges}
          />
        </Grid>
        <Grid item size={{xs:12 , sm:6}}>
          <TextField 
          label='Discounted Price'
          fullWidth
          name='discountedPrice'
          value={productData.discountedPrice}
          onChange={handleChanges}
          />  
        </Grid>
        <Grid item size={{xs:12 , sm:6}}>
          <TextField 
          label='Discount Present'
          fullWidth
          name='discountPresent'
          value={productData.discountPresent}
          onChange={handleChanges}
          />    
        </Grid>

        <Grid item size={{xs:12 , sm:6}}>
          <TextField 
          label='Quantity'
          fullWidth
          name='quantity'
          value={productData.quantity}
          onChange={handleChanges}
          />  
        </Grid>
        <Grid item size={{xs:6 , sm:4}}>
         <FormControl fullWidth>
          <InputLabel>Top Level Category</InputLabel>
          <Select 
          label='Top Level Category'
          fullWidth
          name='topLevelCategory'
          value={productData.topLevelCategory}
          onChange={handleChanges}
          >
            <MenuItem value='men'>Men</MenuItem>
            <MenuItem value='women'>Women</MenuItem>
            <MenuItem value='kids'>Kids</MenuItem>
          </Select>
          </FormControl>

        </Grid>
        <Grid item size={{xs:6 , sm:4}}>
          <FormControl fullWidth>
          <InputLabel>Second Level Category</InputLabel>
          <Select 
          label='Second Level Category'
          fullWidth
          name='secondLevelCategory'
          value={productData.secondLevelCategory}
          onChange={handleChanges}
          >
          <MenuItem value='clothing'>Clothing</MenuItem>
            <MenuItem value='accessories'>Accessories</MenuItem>
            <MenuItem value='brand'>Brand</MenuItem>
          </Select>
          </FormControl>
        </Grid>
        <Grid item size={{xs:6 , sm:4}}>
          <FormControl fullWidth>
          <InputLabel>Third Level Category</InputLabel>
          <Select 
          label='Third Level Category'
          fullWidth
          name='thirdLevelCategory'
          value={productData.thirdLevelCategory}
          onChange={handleChanges}
          >
            <MenuItem value='top'>tops</MenuItem>
            <MenuItem value='women_dress'>Dresses</MenuItem>
            <MenuItem value='t_shirts'>T-Shirts</MenuItem>
            <MenuItem value='saree'>Sarees</MenuItem>
            <MenuItem value='lengha'>Lengha</MenuItem>
        
          </Select>
          </FormControl>
        </Grid>
        
        {
          productData.size.map((size,index)=>(
            <Grid container item spacing={3}>
                <Grid item size={{xs:12 , sm:6}}>
                  <TextField 
                  label="Size Name"              
                  name='name'
                  value={size.name}
                  onChange={(e)=>handleSizeQuantity(e,index)}
                  fullWidth
                  required
                  />
                </Grid>

                <Grid item size={{xs:6}}>
                  <TextField 
                  label="Quantity"
                  fullWidth
                  name='size_quantity'
                  value={size.quantity}
                  onChange={(e)=>handleSizeQuantity(e,index)}
                  required
                  />
                </Grid>
            </Grid>

          ))
        }
            <Grid item size={{xs:12}}>
              <Button variant='contained' type='submit' className='w-full' sx={{p:2}}>
                Add New Product
              </Button>
            </Grid>
      </Grid>

      </form>

  </Fragment>
};

export default CreateProduct;
