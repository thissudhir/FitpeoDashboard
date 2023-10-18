import { Container } from "@mui/material";
import React from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
  Label,
} from "recharts";

const data = [
  { name: "Returning Customers", value: 40, fill: "#FF5733" },
  { name: "New Customers", value: 25, fill: "#33B6FF" },
  { name: "Regular Customers", value: 35, fill: "#D3D3D3" },
];

const COLORS = ["#FFC0CB", "#ADD8E6", "#D3D3D3"];

export const Piechart = () => {
  return (
    <Container
      sx={{
        background: "white",
        borderRadius: "15px",
        marginTop: "30px",
        marginBottom: "30px",
        display: "flex",
        flex: 1,
      }}
    >
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          />
          {/* <Label value="Pie Chart Center" position="center" fill="black" /> */}
        </PieChart>
      </ResponsiveContainer>
    </Container>
  );
};
