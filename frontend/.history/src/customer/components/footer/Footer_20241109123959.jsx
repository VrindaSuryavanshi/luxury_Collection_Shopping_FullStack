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
            <Button className="pb-2" variant="h4" gutterBottom>
              About
            </Button>
          </div>

          <div>
            <Button className="pb-2" variant="h4" gutterBottom>
              Blog
            </Button>
          </div>

          <div>
            <Button className="pb-2" variant="h4" gutterBottom>
              Press
            </Button>
          </div>
          <div>
            <Button className="pb-2" variant="h4" gutterBottom>
              Partners
            </Button>
          </div>

          <div>
            <Button className="pb-2" variant="h4" gutterBottom>
              Jobs
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <h3 className="pb-2 font-bold font-serif">Solutions</h3>
          <div>
            <Button  variant="h4" gutterBottom>
              Marketing
            </Button>
          </div>

          <div>
            <Button  variant="h4" gutterBottom>
              Analytics
            </Button>
          </div>

          <div>
            <Button  variant="h4" gutterBottom>
              Commerce
            </Button>
          </div>
          <div>
            <Button  variant="h4" gutterBottom>
              Insights
            </Button>
          </div>

          <div>
            <Button className="pb-2" variant="h4" gutterBottom>
              Supports
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <h3 className="pb-2 font-bold font-serif">Documentation</h3>
          <div>
            <Button className="pb-2" variant="h4" gutterBottom>
              Guid
            </Button>
          </div>

          <div>
            <Button className="pb-2" variant="h4" gutterBottom>
              API Status
            </Button>
          </div>

         
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <h3 className="pb-2 font-bold font-serif">Legal</h3>
          <div>
            <Button className="pb-2" variant="h4" gutterBottom>
              Claim
            </Button>
          </div>

          <div>
            <Button className="pb-2" variant="h4" gutterBottom>
              Privacy
            </Button>
          </div>

          <div>
            <Button className="pb-2" variant="h4" gutterBottom>
              Terms
            </Button>
          </div>
                </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
