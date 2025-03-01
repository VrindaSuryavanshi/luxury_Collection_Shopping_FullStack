import React from "react";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { createProduct } from './../../State/product/Action';
import { Fragment } from "react";
import { useEffect } from "react";


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
    <div className="flex justify-center">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input type="text" name="title" value={productData.title} onChange={handleChanges} placeholder="Title"/>
        <input type="text" name="description" value={productData.description} onChange={handleChanges} placeholder="Description"/>
        <input type="text" name="price" value={productData.price} onChange={handleChanges} placeholder="Price"/>
        <input type="text" name="discountedPrice" value={productData.discountedPrice} onChange={handleChanges} placeholder="Discounted Price"/>
        <input type="text" name="discountPresent" value={productData.discountPresent} onChange={handleChanges} placeholder="Discount Present"/>
        <input type="text" name="quantity" value={productData.quantity} onChange={handleChanges} placeholder="Quantity"/>
        <input type="text" name="brand" value={productData.brand} onChange={handleChanges} placeholder="Brand"/>
        <input type="text" name="color" value={productData.color} onChange={handleChanges} placeholder="Color"/>
        <input type="text" name="imageUrl" value={productData.imageUrl} onChange={handleChanges} placeholder="Image Url"/>
        <input type="text" name="topLevelCategory" value={productData.topLevelCategory} onChange={handleChanges} placeholder="Top Level Category"/>
        <input type="text" name="secondLevelCategory" value={productData.secondLevelCategory} onChange={handleChanges} placeholder="Second Level Category"/>
        <input type="text" name="thirdLevelCategory" value={productData.thirdLevelCategory} onChange={handleChanges} placeholder="Third Level Category"/>
        <div className="flex space-x-4">
          {productData.size.map((size,index)=>(
            <Fragment>
              <input type="text" name="size" value={size.name} onChange={(e)=>handleSizeQuantity(e,index)} placeholder="Size"/>
              <input type="text" name="quantity" value={size.quantity} onChange={(e)=>handleSizeQuantity(e,index)} placeholder="Quantity"/>
            </Fragment>
          ))}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  </Fragment>;
};

export default CreateProduct;
