import React, { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Select,
  MenuItem,
  Table,
  InputBase,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  FormControl,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import { styled, alpha } from "@mui/material/styles";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export const Products = () => {
  const [timeRange, setTimeRange] = useState("30days");

  const handleTimeRangeChange = (event) => {
    setTimeRange(event.target.value);
  };

  // Sample product data
  const products = [
    {
      id: 1,
      name: "Product 1",
      stock: 10,
      price: "$19.99",
      totalSales: 100,
      thumbnail:
        "https://t4.ftcdn.net/jpg/02/45/56/35/360_F_245563558_XH9Pe5LJI2kr7VQuzQKAjAbz9PAyejG1.jpg",
      description: "lorem",
    },
    {
      id: 2,
      name: "Product 2",
      stock: 10,
      price: "$19.99",
      totalSales: 100,
      thumbnail:
        "https://t4.ftcdn.net/jpg/02/45/56/35/360_F_245563558_XH9Pe5LJI2kr7VQuzQKAjAbz9PAyejG1.jpg",
      description: "lorem",
    },
    // Add more product data as needed
  ];

  const tableStyle = {
    border: "none",
    boxShadow: "none",
    borderBottom: "none",
  };
  //   const handleChange = (event: SelectChangeEvent) => {
  //     setAge(event.target.value);
  //   };

  return (
    <Box padding={"10px"} sx={{ background: "white" }}>
      <Box display={"flex"} justifyContent={"space-between"}>
        <Typography variant="h4">Product sell</Typography>
        <Box sx={{ display: "flex" }}>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Select
            sx={{ m: 1, minWidth: 120 }}
            size="small"
            value={timeRange}
            onChange={handleTimeRangeChange}
            variant="outlined"
          >
            <MenuItem value="30days">Last 30 Days</MenuItem>
            <MenuItem value="60days">Last 60 Days</MenuItem>
            <MenuItem value="90days">Last 90 Days</MenuItem>
          </Select>
        </Box>
      </Box>
      <Box>
        {/* <Box display={"flex"} justifyContent={"space-between"}>
          <Typography variant="p" flex={4}>
            Product Name
          </Typography>
          <Typography variant="p" flex={0.5}>
            Stock
          </Typography>
          <Typography variant="p" flex={0.5}>
            Price
          </Typography>
          <Typography variant="p" flex={0.5}>
            Total Sale
          </Typography>
        </Box> */}
        <Divider />
        {/* <Box display={"flex"} justifyContent={"space-between"}>
          {products.map((product, index) => (
            <>
              <Typography variant="p">{product.name}</Typography>
              <Typography variant="p">{product.stock}</Typography>
              <Typography variant="p">{product.price}</Typography>
              <Typography variant="p">{product.totalSales}</Typography>
            </>
          ))}
        </Box> */}
        {/* <List>
          {products.map((product, index) => (
            <ListItem key={product.id}>
              <ListItemText
                primary={` ${product.name} ${product.stock} ${product.price} ${product.totalSales}`}
                secondary={`${product.description}`}
              />
            </ListItem>
          ))}
        </List> */}

        <TableContainer component={Paper}>
          <Table style={tableStyle}>
            <TableHead>
              <TableRow>
                <TableCell style={tableStyle}>Product Name</TableCell>
                <TableCell style={tableStyle}>Stock</TableCell>
                <TableCell style={tableStyle}>Price</TableCell>
                <TableCell style={tableStyle}>Total Sales</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell style={tableStyle}>{product.name}</TableCell>
                  <TableCell style={tableStyle}>{product.stock}</TableCell>
                  <TableCell style={tableStyle}>{product.price}</TableCell>
                  <TableCell style={tableStyle}>{product.totalSales}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};
