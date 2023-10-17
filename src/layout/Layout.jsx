import { Box, useMediaQuery } from "@mui/material";
import { Navbar } from "../component/Navbar";
import React from "react";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { Sidebar } from "../component/Sidebar";
// import { useGetUserQuery } from "../../state/api";
// import { useSelector } from "react-redux";

export const Layout = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  //   const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  //   const userId = useSelector((state) => state.global.userId);
  //   const { data } = useGetUserQuery(userId);
  // console.log("user", data);
  return (
    <Box display={isNonMobile ? "flex" : "block"} width="100%" height="100%">
      <Sidebar
        // user={data || {}}
        isNonMobile={isNonMobile}
        drawerwidth="250px"
        // isSidebarOpen={isSidebarOpen}
        // setIsSidebarOpen={setIsSidebarOpen}
      />
      <Box flexGrow={1}>
        <Navbar
        //   user={data || {}}
        //   isSidebarOpen={isSidebarOpen}
        //   setIsSidebarOpen={setIsSidebarOpen}
        />
        <Outlet />
      </Box>
    </Box>
  );
};
