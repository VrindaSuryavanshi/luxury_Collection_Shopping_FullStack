import { Avatar, Box, Grid2, Rating } from "@mui/material";
import React from "react";

const ProductReviewCard = () => {
  return (
    <div>
      <Grid2 container spacing={2} gap={3}>
        <Grid2 item s={1}>
          <Box>
            <Avatar
              className="text-white"
              sx={{ width: 56, height: 56, bgcolor: "#9155fd" }}
            >
              R
            </Avatar>
          </Box>
        </Grid2>

        <Grid2 item xs={9}>
          <div className="space-y-1">
            <div>
              <p className="font-semibold">Raam</p>
              <p className="opacity-70">April 5, 2023</p>
            </div>
          </div>
          <Rating value={4.5} name="half-rating" readOnly precision={0.5} />
          <p>Nice product, Looking beautiful...!</p>
        </Grid2>

        <Grid2  item xs={5}>
            <h1 className="text-xl font-semibold pb-1">Product Ratings</h1>

           <div className='flex justify-center space-x-3'>
<Rating value={4.5} precision={0.5} readOnly />
<p className="opacity-60">6785 Ratings</p>
           </div>
        </Grid2>
      </Grid2>
    </div>
  );
};

export default ProductReviewCard;
