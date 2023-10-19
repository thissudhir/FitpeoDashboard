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
        sx={{ display: "flex", justifyContent: "space-between", gap: "30px" }}
      >
        <Barchart />
        <Piechart />
      </Grid>
      <Products />
    </Box>
  );
};
