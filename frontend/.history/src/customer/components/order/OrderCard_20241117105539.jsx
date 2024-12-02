import { Grid2 } from "@mui/material";
import React from "react";

const OrderCard = () => {
  return (
    <div>
      <Grid2 container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid2 item size={{ xs: 6 }}>
          <div className="flex cursor-pointer">
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuWH9lvh9TZSb4FnJsmDHT_2O_-_wtVJCW1A&s"
              alt=""
            />

            <div className="ml-5 space-y-2">
              <p>
                Light Lilla Ballgown - Luxury Dress - Dress Sparkly - Lilla
                Wedding Dress - Evening Dress - Prom Dress - Wedding Dress
              </p>
              <p className="opacity-60 text-sm font-semibold">size: M</p>
              <p className="opacity-60 text-sm font-semibold">color: hite</p>
            </div>
          </div>
        </Grid2>
      </Grid2>
    </div>
  );
};

export default OrderCard;
