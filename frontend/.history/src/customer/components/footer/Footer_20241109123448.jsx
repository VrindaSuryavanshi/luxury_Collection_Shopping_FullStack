import { Button, Grid } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <div>
      <Grid
        className="bg-black text-white text-center  mt-4 pt-4"
        container
        sx={{ background: "black", text: "white" }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <h3 className="pb-2 font-bold font-serif">Company</h3>
          <div>
            <Button   gutterBottom>
              About
            </Button>
          </div>

          <div>
            <Button   gutterBottom>
              Blog
            </Button>
          </div>

          <div>
            <Button   gutterBottom>
              Press
            </Button>
          </div>
          <div>
            <Button   gutterBottom>
              Partners
            </Button>
          </div>

          <div>
            <Button   gutterBottom>
              Jobs
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <h3 className="pb-2 font-bold font-serif">Company</h3>
          <div>
            <Button   gutterBottom>
              About
            </Button>
          </div>

          <div>
            <Button   gutterBottom>
              Blog
            </Button>
          </div>

          <div>
            <Button   gutterBottom>
              Press
            </Button>
          </div>
          <div>
            <Button   gutterBottom>
              Partners
            </Button>
          </div>

          <div>
            <Button   gutterBottom>
              Jobs
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <h3 className="pb-2 font-bold font-serif">Company</h3>
          <div>
            <Button   gutterBottom>
              About
            </Button>
          </div>

          <div>
            <Button   gutterBottom>
              Blog
            </Button>
          </div>

          <div>
            <Button   gutterBottom>
              Press
            </Button>
          </div>
          <div>
            <Button   gutterBottom>
              Partners
            </Button>
          </div>

          <div>
            <Button   gutterBottom>
              Jobs
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <h3 className="pb-2 font-bold font-serif">Company</h3>
          <div>
            <Button   gutterBottom>
              About
            </Button>
          </div>

          <div>
            <Button   gutterBottom>
              Blog
            </Button>
          </div>

          <div>
            <Button   gutterBottom>
              Press
            </Button>
          </div>
          <div>
            <Button   gutterBottom>
              Partners
            </Button>
          </div>

          <div>
            <Button   gutterBottom>
              Jobs
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
