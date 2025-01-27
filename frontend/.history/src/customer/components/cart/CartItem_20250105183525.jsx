import { IconButton } from "@mui/material";
import React from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Button } from "@headlessui/react";
import {useDispatch} from 'react-redux';
import {removeCartItem , updateCartItem} from '../../../State/cart/Action'

const CartItem = ({item}) => {
  const dispatch = useDispatch();

  const handleUpdateCartItem = (num)=>{
    const {data} = {data:{quantity:item.quantity+num},cartItemId:item?.id};
    console.log("updated value " , data);

    dispatch(updateCartItem(data));
  }

  // const handleRemoveCartItem =()=>{
  //   console.log("deleted id  value " , item.id);

  //   dispatch(removeCartItem(item.id));
  // }

  return (
    <div className="p-5 shadow-lg border rounded-md ">
      <div className=" flex items-center flex-row">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full"
            src={item.product.imageUrl}
            alt=""
          />
        </div>

        <div className="ml-5 space-y-1 items-start flex flex-col">
          <p className="font-semibold">{item.product.title}</p>
          <p className="opacity-70">Size: {item.size} , color: {item.product.color}</p>
          <p className="opacity-70">Seller: {item.product.brand}</p>
          <div className="flex items-center space-x-2 text-gray-900 pt-6">
            <p className="font-semibold">₹{item.product.discountedPrice}</p>
            <p className="line-through opacity-50">₹{item.product.price}</p>
            <p className="text-green-600"> {item.product.discountPresent}% OFF</p>
          </div>
        </div>
      </div>
      <div className="lg:flex items-center lg:space-x-10 pt-4">
        <div className="flex items-center space-x-8">
          <IconButton sx={{ color: "RGB(247, 120, 293)" }} 
          onClick={()=>handleUpdateCartItem(-1)}
          disabled ={item.quantity<=1}>
          
            <RemoveCircleOutlineIcon />
          </IconButton>
          <span>{item.quantity}</span>
          <IconButton sx={{ color: "lightblue" }} onClick={()=>handleUpdateCartItem(1)}>
            <AddCircleOutlineIcon />
          </IconButton>

          <div>
            {" "}
            <Button 
            // onClick={()=>handleRemoveCartItem()}
            >
              <span className="text-blue-500">
              REMOVE
              </span></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
