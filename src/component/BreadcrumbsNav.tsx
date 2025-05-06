import React from "react";
import { Breadcrumbs, Typography, Box } from "@mui/material";

const BreadcrumbsNav = () => {
  return (
    <Box>
      <Breadcrumbs separator=" / " aria-label="breadcrumb">
        <Typography color="text.secondary" fontWeight={400}>
          CRM
        </Typography>
        <Typography color="text.secondary" fontWeight={400}>
          Account
        </Typography>
        <Typography color="text.primary" fontWeight={600}>
          Account Details
        </Typography>
      </Breadcrumbs>
    </Box>
  );
};

export default BreadcrumbsNav;
