import React from "react";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { createProduct } from './../../State/product/Action';

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
    setProductData((preState)={
      ...preState,
      [name] : value;
    })
  }

  const handleSizeQuantity = (e,index)=>{
    const {name , value} = e.target;

    name==="size_quantity" ? name="quantity" : name=e.target.name;
    const sizes = [...productData.size];
    sizes[name][value] = value
    
    setProductData((preState)=>{
      ...preState,
      size : sizes
    })
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    dispatch(createProduct(productData));
  }

  return <div></div>;
};

export default CreateProduct;
