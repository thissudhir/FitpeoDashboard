import React, { useState } from "react";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import {
  HomeOutlined,
  ShoppingCartOutlined,
  TrendingUpOutlined,
  AccountBoxOutlined,
  AccountBalanceWalletOutlined,
  LiveHelpOutlined,
  KeyboardArrowDownOutlined,
  KeyboardArrowRightOutlined,
} from "@mui/icons-material";

import FlexBetween from "./FlexBetween";
import { useNavigate } from "react-router-dom";
const navItems = [
  { text: "Dashboard", icon: <HomeOutlined />, arrow: null },
  {
    text: "Products",
    icon: <ShoppingCartOutlined />,
    arrow: <KeyboardArrowRightOutlined />,
  },
  {
    text: "Customers",
    icon: <AccountBoxOutlined />,
    arrow: <KeyboardArrowRightOutlined />,
  },
  {
    text: "Income",
    icon: <AccountBalanceWalletOutlined />,
    arrow: <KeyboardArrowRightOutlined />,
  },
  {
    text: "Promote",
    icon: <TrendingUpOutlined />,
    arrow: <KeyboardArrowRightOutlined />,
  },
  {
    text: "Help",
    icon: <LiveHelpOutlined />,
    arrow: <KeyboardArrowRightOutlined />,
  },
];

// const [anchorEl, setAnchorEl] = useState(null);
// const isOpen = Boolean(anchorEl);
// const handleClick = (event) => setAnchorEl(event.currentTarget);
// const handleClose = () => setAnchorEl(null);
// console.log(navItems);
export const Sidebar = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState("");
  return (
    <Box component={"nav"} bgcolor={"#040440"}>
      <Box width="100%" minHeight={"90.3vh"}>
        <Box m="1.5rem 2rem 2rem 3rem">
          <FlexBetween>
            <Box display="flex" alignItems="center" gap="0.5rem">
              <Typography variant="h5" fontWeight="bold" color={"white"}>
                DASHBOARD
              </Typography>
            </Box>
          </FlexBetween>
        </Box>
        <List sx={{ color: "#61658B" }}>
          {navItems.map(({ text, icon, arrow }) => {
            if (!icon) {
              return (
                <Typography key={text} sx={{ m: "2.25rem 0 1rem 3rem" }}>
                  {text}
                </Typography>
              );
            }
            const lcText = text.toLocaleLowerCase();

            return (
              <ListItem key={text} disablePadding>
                <ListItemButton
                  onClick={() => {
                    navigate(`/${lcText}`);
                    setActive(lcText);
                  }}
                  sx={{
                    borderRadius: ".6rem",
                    width: "50%",
                    backgroundColor:
                      active === lcText ? "#2D2D69" : "transparent",
                    color: active === lcText ? "white" : "#61658B",
                  }}
                >
                  <ListItemIcon
                    sx={{
                      ml: "1rem",
                      color: active === lcText ? "white" : "#61658B ",
                    }}
                  >
                    {icon}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                  {/* {active === lcText && (
                    <ChevronRightOutlined sx={{ ml: "auto" }} />
                    )} */}
                  {arrow}
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Box>
      <Box sx={{ background: "#2D2D69", borderRadius: "15px" }}>
        <Divider />
        <FlexBetween textTransform="none" gap="1rem" m="1.5rem 2rem 0 3rem">
          <Box
            component="img"
            alt="profile"
            src={
              "https://t4.ftcdn.net/jpg/02/45/56/35/360_F_245563558_XH9Pe5LJI2kr7VQuzQKAjAbz9PAyejG1.jpg"
            }
            height="40px"
            width="40px"
            borderRadius="50%"
            sx={{ objectFit: "cover" }}
          />
          <Box textAlign="left">
            <Typography
              fontWeight="bold"
              fontSize="0.9rem"
              sx={{ color: "white" }}
            >
              {/* {user.name} */}Shrukh
            </Typography>
            <Typography fontSize="0.8rem" sx={{ color: "gray" }}>
              {/* {user.occupation} */} Project Manager
            </Typography>
          </Box>
          <KeyboardArrowDownOutlined
            sx={{ color: "white", fontSize: "25px" }}
          />
          {/* <Menu
            anchorEl={anchorEl}
            open={isOpen}
            onClose={handleClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          >
            <MenuItem onClick={handleClose}>Log out</MenuItem>
          </Menu> */}
          {/* </Box> */}
        </FlexBetween>
      </Box>
    </Box>
  );
};
