import React from "react";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

// Sample customer data
const customers = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Alice Smith", email: "alice@example.com" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com" },
  // Add more customer data as needed
];

export const Customers = () => {
  return (
    <Container sx={{ marginTop: "30px", marginBottom: "30px" }}>
      <Typography variant="h4" sx={{ marginBottom: "20px" }}>
        Customers
      </Typography>
      <List>
        {customers.map((customer) => (
          <ListItem key={customer.id}>
            <ListItemText primary={customer.name} secondary={customer.email} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};
