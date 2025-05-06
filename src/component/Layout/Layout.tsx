"use client";

import { Box, Toolbar } from "@mui/material";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = ({ children }: { children: React.ReactNode }) => (
  <Box sx={{ display: "flex" }}>
    <Header />
     <Box component="nav" sx={{ flexGrow: 1, pt: 15,}}>  <Sidebar /></Box>
   
    <Box component="main" sx={{ flexGrow: 1, pt: 15 }}>
      {children}
    </Box>
  </Box>
);

export default Layout;
