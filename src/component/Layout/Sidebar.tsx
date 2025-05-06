"use client";

import {
  Box,
  Drawer,
} from "@mui/material";
import UserCard from "../base/UserCard";
import ActionCard from "../base/ActionCard";
import BusinessDetailsForm from "../Form/BusinessDetailsForm";

const Sidebar = () => (
  <Drawer
    variant="permanent"
    sx={{
      width: 422,
      flexShrink: 0,
      [`& .MuiDrawer-paper`]: { 
        width: 422, 
        boxSizing: "border-box",
        marginTop: "130px",
        borderRight: 'none',
        background: 'transparent',
        px: 2,
      },
    }}
  >
    <Box sx={{
      mt: 2
    }}>
      <UserCard />
      {/* <ActionCard /> */}
      {/* <BusinessDetailsForm /> */}
    </Box>
  </Drawer>
);

export default Sidebar;
