import React from "react";
import { Grid, Paper, Typography, Box } from "@mui/material";
import {
  MonetizationOnOutlined,
  ArrowUpwardOutlined,
} from "@mui/icons-material";
export const Boxs = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sm={6} md={3} sx={{ marginTop: "15px" }}>
        <Paper
          elevation={3}
          style={{
            padding: "10px",
            display: "flex",
            alignItems: "center",
            // justifyContent: "space-between",
            gap: "15px",
            boxShadow: "none",
            background: "#FFFFFF",
            borderRadius: "10px",
          }}
        >
          <Box
            sx={{
              background: "#DCFFEB",
              //   flex: 1, // Set the box to take up all available space
              display: "flex",
              flexDirection: "column",
              justifyContent: "center", // Center the content vertically
              color: "#01A746",
              padding: "35px",
              borderRadius: "50%", // Add some padding for spacing
            }}
          >
            <MonetizationOnOutlined sx={{ fontSize: "70px" }} />
          </Box>
          <Box>
            <Typography variant="p" color={"lightgray"} fontSize={"14px"}>
              Earning
            </Typography>
            <Typography variant="h4">$198k</Typography>
            <Typography
              variant="h6"
              sx={{
                display: "flex",
                alignItems: "center",
                color: "#01A746",
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              <ArrowUpwardOutlined fontSize="14px" />
              37.8% <Typography color={"black"}>&nbsp;this month</Typography>
            </Typography>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};
