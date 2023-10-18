import { Box, Container, Typography } from "@mui/material";
import React, { useCallback, useState } from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  Legend,
  Sector,
  ResponsiveContainer,
  Cell,
  Label,
} from "recharts";

const data = [
  { name: "Returning Customers", value: 40, fill: "#F43799" },
  { name: "New Customers", value: 25, fill: "#9160EC" },
  { name: "Regular Customers", value: 35, fill: "#F1EFFC" },
];

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy - 10} dy={8} textAnchor="middle">
        {`${value}%`}
      </text>
      <text x={cx} y={cy} dy={8} textAnchor="middle">
        {payload.name.split(" ").map((line, index) => (
          <tspan x={cx} dy={index === 0 ? 15 : 12} textAnchor="middle">
            {line}
          </tspan>
        ))}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
    </g>
  );
};

export const Piechart = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );
  return (
    <Container
      sx={{
        background: "white",
        borderRadius: "15px",
        marginTop: "30px",
        marginBottom: "30px",
        flex: 1,
      }}
    >
      <Box padding={"10px"}>
        <Typography variant="h5">
          <strong>Customers</strong>
        </Typography>
        <Box sx={{ color: "lightgray" }}>Customers that buy product</Box>
      </Box>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            // fill="#8884d8"
            dataKey="value"
            onMouseEnter={onPieEnter}
          />
        </PieChart>
      </ResponsiveContainer>
    </Container>
  );
};
