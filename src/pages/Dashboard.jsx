import React from "react";
import { Boxs } from "../component/Boxs";
import { Box, Container, Grid } from "@mui/material";
import { Barchart } from "../component/Barchart";
import { Products } from "../component/Products";
import { Piechart } from "../component/Piechart";

export const Dashboard = () => {
  return (
    <Box sx={{ background: "#F5F6F8", padding: "20px" }}>
      <Boxs />
      <Grid
        container
        spacing={{ xs: 2, md: 3 }} // Adjust the spacing as needed
      >
        <Grid item xs={12} md={9}>
          {" "}
          {/* Full width on small screens, half width on medium screens and above */}
          <Barchart />
        </Grid>
        <Grid item xs={12} md={3}>
          <Piechart />
        </Grid>
      </Grid>
      <Products />
    </Box>
  );
};
