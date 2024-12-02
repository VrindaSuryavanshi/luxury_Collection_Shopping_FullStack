import { Grid2 } from "@mui/material";
import React from "react";
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from "react-router-dom";

const OrderCard = () => {
  const navigate = useNavigate();

  let description = `Light Lilla Ballgown-Luxury 
  Dress-Dress Sparkly-Lilla Wedding Dress-Evening
  Dress-Prom Dress-Wedding Dress`;
  return (
    <div onClick={()=>navigate(`/account/order/${9}`)} className="p-5 shadow-md hover:shadow-2xl border ">
      <Grid2 container spacing={2} sx={{ justifyContent: "space-between" , flexDirection: { xs: 'column', md: 'row' }}}>

        <Grid2 item size={{ xs: 6 }} >
          <div className="flex cursor-pointer">
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuWH9lvh9TZSb4FnJsmDHT_2O_-_wtVJCW1A&s"
              alt=""
            />

            <div className="ml-5 space-y-2 sm:flex sm:flex-row ">
              <p className="text-sm">
                <pre className="flex flex-wrap text-left">
               {description}
                </pre>
                <p className="opacity-60 text-sm font-semibold">size: M</p>
              <p className="opacity-60 text-sm font-semibold">color: White</p>
              </p>
              
            </div>
          </div>
        </Grid2>

        <Grid2 item size={{xs:2}}>
            <p>₹ 50,684</p>
        </Grid2>

        <Grid2 item size={{xs:4}}>
           { true && <div>
             <p><AdjustIcon sx={{width:'20px' , height:'20px' ,paddingRight:"4px"}}
           className=" text-green-600"/><span>Delivered On Mar 03 </span></p>
           <p className="text-xs">
            Your item has been delivered.
           </p>
           </div>} 
           {false &&  <p><span>Expected Delivery On Mar 03 </span></p>}
        </Grid2>
        
      </Grid2>
    </div>
  );
};

export default OrderCard;
