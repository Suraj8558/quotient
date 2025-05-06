// components/ProfileMenu.tsx
import React, { useState } from "react";
import {
  Avatar,
  Menu,
  MenuItem,
  IconButton,
  Typography,
  Divider,
  Box,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const ProfileMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Avatar sx={{ width: 36, height: 36, color: 'text.white', backgroundColor: 'primary.light', py:1, px: '5.5px', fontSize: 16, lineHeight: 22, fontWeight: 600}}>MS</Avatar>
        <Box sx={{ ml: 1 , display: 'flex', flexDirection: 'column',}}>
          <Typography variant="caption" color="text.primary" fontWeight={500}>Manoj Sharma</Typography>
          <Typography variant="caption" color="text.secondary">
            Super Admin
          </Typography>
        </Box>
      </Box>
      <IconButton onClick={handleClick} size="small" sx={{ ml: 1 }}>
        <KeyboardArrowDownIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            mt: 1.5,
            minWidth: 180,
            borderRadius: 2,
            boxShadow: "0px 2px 8px rgba(0,0,0,0.15)",
            border: "1px solid rgba(0,0,0,0.08)",
          },
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Box px={2} py={1}>
          <Typography variant="subtitle1" color="text.secondary">
            Manoj Sharma
          </Typography>
          <Typography variant="body2" color="text.secondary">
            manojsharma@gmail.com
          </Typography>
        </Box>
        <Divider />
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>Settings</MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </Box>
  );
};

export default ProfileMenu;
