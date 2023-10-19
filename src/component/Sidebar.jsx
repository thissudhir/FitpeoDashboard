import React, { useState } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Drawer,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import {
  HomeOutlined,
  DashboardOutlined,
  ShoppingCartOutlined,
  TrendingUpOutlined,
  AccountBoxOutlined,
  AccountBalanceWalletOutlined,
  LiveHelpOutlined,
  KeyboardArrowDownOutlined,
  KeyboardArrowRightOutlined,
  MenuOutlined,
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

export const Sidebar = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState("dashboard");
  const isSmallScreen = useMediaQuery("(max-width: 768px)");

  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Box component="nav" bgcolor="#040440">
      {isSmallScreen ? (
        <IconButton
          color="white"
          onClick={toggleDrawer}
          sx={{ display: { xs: "block", sm: "none" } }}
        >
          <MenuOutlined />
        </IconButton>
      ) : null}

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer}
        variant="temporary"
      >
        {/* Drawer content */}
        <Box sx={{ width: 280 }}>
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
                      toggleDrawer(); // Close the drawer on item click
                    }}
                    sx={{
                      marginRight: "10px",
                      marginLeft: "10px",
                      borderRadius: ".6rem",
                      width: "50%",
                      backgroundColor:
                        active === lcText ? "#2D2D69" : "transparent",
                      color: active === lcText ? "white" : "#61658B",
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        color: active === lcText ? "white" : "#61658B",
                      }}
                    >
                      {icon}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                    {arrow}
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Drawer>

      {/* Fixed sidebar for large screens */}
      {!isSmallScreen ? (
        <Box height={"100vh"}>
          <Box m="1.5rem 2rem 2rem 3rem">
            <FlexBetween>
              <Box
                display="flex"
                alignItems="center"
                // flexDirection={"row"}
                gap="0.5rem"
                justifyContent={"space-between"}
                color={"white"}
              >
                <DashboardOutlined />
                <Typography variant="h5" fontWeight="bold">
                  DASHBOARD
                </Typography>
              </Box>
            </FlexBetween>
            {/* </Box> */}
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
                        // marginRight: "10px",
                        // marginLeft: "10px",
                        borderRadius: ".6rem",
                        width: "50%",
                        backgroundColor:
                          active === lcText ? "#2D2D69" : "transparent",
                        color: active === lcText ? "white" : "#61658B",
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          // ml: "1rem",
                          color: active === lcText ? "white" : "#61658B ",
                        }}
                      >
                        {icon}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                      {arrow}
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
            <Box
              position="absolute"
              bottom="2rem"
              sx={{
                background: "#2D2D69",
                borderRadius: "5px",

                // margin: "10px",
                // marginBottom: "15px",
              }}
            >
              <FlexBetween textTransform="none" gap="5px" padding={"10px"}>
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
                    Shrukh
                  </Typography>
                  <Typography fontSize="0.8rem" sx={{ color: "gray" }}>
                    Project Manager
                  </Typography>
                </Box>
                <KeyboardArrowDownOutlined
                  sx={{ color: "white", fontSize: "25px" }}
                />
              </FlexBetween>
            </Box>
          </Box>
        </Box>
      ) : null}
    </Box>
  );
};
