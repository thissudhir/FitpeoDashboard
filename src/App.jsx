import React from "react";
import { Navbar } from "./component/Navbar";
import { Sidebar } from "./component/Sidebar";
import { Customers } from "./component/Customers";
import { Products } from "./component/Products";
import { Layout } from "./layout/Layout";
import { Dashboard } from "./pages/Dashboard";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Help } from "./component/Help";
import { Income } from "./component/Income";
import { Promote } from "./component/Promote";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        {/* <ThemeProvider> */}
        <CssBaseline />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/products" element={<Products />} />
            <Route path="/help" element={<Help />} />
            <Route path="/income" element={<Income />} />
            <Route path="/promote" element={<Promote />} />
          </Route>
        </Routes>
        {/* </ThemeProvider> */}
      </BrowserRouter>
    </div>
  );
};

export default App;
