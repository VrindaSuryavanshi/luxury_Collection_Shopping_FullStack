import { Box, Grid2, TextField } from "@mui/material";
import React, { useState } from "react";
import AddressCard from "../addressCard/AddressCard";
import { Button } from "@headlessui/react";
import { Grid3x3 } from "@mui/icons-material";


const DeliveryAddressForm = (step1) => {

  const [step , setStep] = useState(1);
  const handleDeliverHere = ()=>{
    setStep(2);
      navigate('/orderSummary');

  }
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    const address = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      address: data.get("address"),
      city: data.get("city"),
      state: data.get("state"),
      zip: data.get("zip"),
      mobile: data.get("phone"),
    };
    console.log("submitted", address);
    setStep(2);
    navigate('/orderSummary');
  };
  
  return (
    <div>
      <Grid2 container spacing={4}>
        <Grid2
          size={{ xs: 12, lg: 5 }}
          className="border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll"
        >
          <div className="p-5 py-7 border-b cursor-pointer ">
            <AddressCard />

            <div className="text-left py-1">
              <Button
                className="bg-purple-500 p-2 mt-2 rounded-md uppercase pl-4 pr-4 text-white "
                sx={{ mt: 2, bgcolor: "RGB(145 85 253" }}
                size="large"
                variant="contained"
                onClick={handleDeliverHere}
              >
                Deliver Here
              </Button>
            </div>
          </div>
        </Grid2>

        <Grid2 item size={{ xs: 12, lg: 6.8 }}>
          <Box className="border rounded-s-md shadow-md p-3 ">
            <form onSubmit={handleSubmit}>
              <Grid2 container spacing={3}>
                <Grid2 item size={{ xs: 12, sm: 6 }}>
                  <TextField
                    required
                    id="firstName"
                    name="firstName"
                    label="First Name"
                    fullWidth
                    autoComplete="given-name"
                    
                  />
                </Grid2>

                <Grid2 item size={{ xs: 12, sm: 6 }}>
                  <TextField
                    required
                    id="lastName"
                    name="lastName"
                    label="Last Name"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid2>

                <Grid2 item size={{ xs: 12 }}>
                  <TextField
                    required
                    id="address"
                    name="address"
                    label="Address"
                    fullWidth
                    autoComplete="given-name"
                    multiline
                    rows={4}
                  />
                </Grid2>

                <Grid2 item size={{ xs: 12, sm: 6 }}>
                  <TextField
                    required
                    id="city"
                    name="city"
                    label="City"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid2>
                <Grid2 item size={{ xs: 12, sm: 6 }}>
                  <TextField
                    required
                    id="state"
                    name="state"
                    label="State/Province/Region"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid2>

                <Grid2 item size={{ xs: 12, sm: 6 }}>
                  <TextField
                    required
                    id="zip"
                    name="zip"
                    label="Zip/Postal code"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid2>
                <Grid2 item size={{ xs: 12, sm: 6 }}>
                  <TextField
                    required
                    id="phone"
                    name="phone"
                    label="Phone Number"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid2>
                <Button
                  className="bg-purple-500 p-2 mt-2 rounded-md uppercase pl-4 pr-4 text-white "
                  sx={{ mt: 2, bgcolor: "RGB(145 85 253" }}
                  size="large"
                  variant="contained"
                  type="submit"
                 
                >
                  Deliver Here
                </Button>
              </Grid2>
            </form>
          </Box>
        </Grid2>
      </Grid2>
    </div>
  );
};

export default DeliveryAddressForm;
