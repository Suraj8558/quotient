// components/NotificationMenu.tsx
import React, { useState } from "react";
import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Badge,
  Divider,
  ListItemText,
} from "@mui/material";
import Image from "next/image";

const NotificationMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // Example dummy notifications
  const notifications = [
    { id: 1, title: "New message from Jane", time: "2 mins ago" },
    { id: 2, title: "Server restarted", time: "10 mins ago" },
    { id: 3, title: "You have a new follower", time: "1 hour ago" },
  ];

  return (
    <Box>
      <IconButton onClick={handleOpen} sx={{ p: 0}}>
        {/* currently hide badge */}
        {/* <Badge badgeContent={notifications.length} color="error">
        </Badge> */}  
          <Image
            src="/Notification.svg"
            alt="Notifications"
            width={38}
            height={38}
          />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            elevation: 4,
            sx: {
              mt: 1.5,
              width: 300,
              borderRadius: 2,
            },
          }
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
        <Typography variant="subtitle1" px={2} py={1}>
          Notifications
        </Typography>
        <Divider />
        {notifications.map((notif) => (
          <MenuItem key={notif.id} onClick={handleClose}>
            <ListItemText
              primary={notif.title}
              secondary={
                <Typography variant="caption" color="text.secondary">
                  {notif.time}
                </Typography>
              }
            />
          </MenuItem>
        ))}
        {notifications.length === 0 && (
          <Typography
            variant="body2"
            px={2}
            py={2}
            textAlign="center"
            color="text.secondary"
          >
            No notifications
          </Typography>
        )}
      </Menu>
    </Box>
  );
};

export default NotificationMenu;
