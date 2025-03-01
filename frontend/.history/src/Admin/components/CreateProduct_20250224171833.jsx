import React from "react";

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
  const [productData , setProductData] = useState({
     title :"",
     description :"",
    price :"",
    discountedPrice :"",
     discountPresent :"",
    quantity :"",
     brand :"",
     color :"",
     size : initialSizes ,
     imageUrl :"",
     topLevelCategory :"",
     secondLevelCategory :"",
     thirdLevelCategory :"",
   
  });
  return <div></div>;
};

export default CreateProduct;
