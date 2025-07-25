import { IconButton } from "@mui/material";
import React from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Button } from "@headlessui/react";

const CartItem = ({item}) => {
  return (
    <div className="p-5 shadow-lg border rounded-md ">
      <div className=" flex items-center flex-row">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full"
            src="https://media.gettyimages.com/id/200213395-001/photo/young-woman-walking-downstairs-looking-away.jpg?s=612x612&w=gi&k=20&c=8ibl-E159k5WdMX8d1VCVQbNtXQsKsIBJd9l8pPEmz8="
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
          <IconButton sx={{ color: "RGB(247, 120, 293)" }}>
          
            <RemoveCircleOutlineIcon />
          </IconButton>
          <span>2</span>
          <IconButton sx={{ color: "lightblue" }}>
            <AddCircleOutlineIcon />
          </IconButton>

          <div>
            {" "}
            <Button>
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
