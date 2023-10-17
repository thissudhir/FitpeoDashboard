import React from "react";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

// Sample income data
const incomeData = [
  { product: "Product A", income: "$1000" },
  { product: "Product B", income: "$750" },
  { product: "Product C", income: "$1200" },
  // Add more income data as needed
];

export const Income = () => {
  return (
    <Container sx={{ marginTop: "30px", marginBottom: "30px" }}>
      <Typography variant="h4" sx={{ marginBottom: "20px" }}>
        Income from Products
      </Typography>
      <List>
        {incomeData.map((item, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={item.product}
              secondary={`Income: ${item.income}`}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};
