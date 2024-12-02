import { Grid2 } from "@mui/material";
import React from "react";
import OrderCard from "./OrderCard";

const orderStatus = [
  { label: "On The Way", value: "on_the_way" },
  { label: "Delivered", value: "delivered" },
  { label: "Cancelled", value: "cancelled" },
  { label: "Returned", value: "returned" },
];
const Order = () => {
  return (
    <div className="m-4">
      <Grid2 container sx={{justifyContent: "space-between" , flexDirection: { xs: 'column', md: 'row' } }} >
        <Grid2 item size={{ xs: 2.5 }}>
          <div className="h-auto shadow-sm bg-white p-5 sticky top-5 text-left">
            <h1 className="font-bold text-lg">Filter</h1>
            <div className="space-y-4 mt-10">
              <h1 className="font-semibold uppercase">Order Status</h1>
              {
                orderStatus.map((option)=><div className="flex items-center">
                <input
                  defaultValue={option.value}
                  type="checkbox"
                  className="h-4 w-4
     border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label className="ml-3 text-sm text-gray-600">
                  {option.value}
                </label>
              </div>)
              }
              
            </div>
          </div>
        </Grid2>

        <Grid2 item size={{xs :12 , sm:9.5}}>
        <div className="h-auto shadow-sm bg-white p-5 top-5 text-left">

              <OrderCard/>
             </div>
        </Grid2>
      </Grid2>
    </div>
  );
};

export default Order;
