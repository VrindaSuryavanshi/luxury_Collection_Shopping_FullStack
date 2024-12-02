import React from "react";
import AddressCard from "../addressCard/AddressCard";
import OrderTracker from "./OrderTracker";
import { Box, Grid2 } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Star } from "@mui/icons-material";
const OrderDetails = () => {
  return (
    <div className="px-5 lg:px-20">
      <div className="font-bold text-xl py-7">
        <h1 className="text-left py-2"> Delivery Address</h1>
        <AddressCard />
      </div>
      <div className="border shadow-lg py-5">
        <OrderTracker activeStep={3} />
      </div>
      <Grid2 className="space-x-5" container>
        <Grid2 item container className='shadow-lg rounded-md p-5 border'
        sx={{ alignItems:'center' , justifyContent:'space-between'}}>

            <Grid2 item size={{sx:6}} sx>
                <div>
                     <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuWH9lvh9TZSb4FnJsmDHT_2O_-_wtVJCW1A&s"
              alt=""
            />
                </div>

                <div className="ml-5 space-y-2">
              <p className="text-sm">
                Light Lilla Ballgown - Luxury Dress - Dress Sparkly - Lilla
                Wedding Dress - Evening Dress - Prom Dress - Wedding Dress
              </p>
              <p className="opacity-60 text-sm font-semibold">size: M</p>
              <p className="opacity-60 text-sm font-semibold">color: White</p>
              <p>₹ 50,684</p>
            </div>
            </Grid2>

            <Grid2 item>
<Box sx={{color: deepPurple[500]}}>
    <Star />
</Box>
            </Grid2>

        </Grid2>
      </Grid2>
    </div>
  );
};

export default OrderDetails;
