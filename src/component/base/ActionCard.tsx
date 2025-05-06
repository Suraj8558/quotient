"use client";
import { Box, Typography, Divider } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import MessageIcon from "@mui/icons-material/Message";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const actions = [
  {
    label: "Email",
    icon: <EmailIcon sx={{ color: "primary.main", fontSize: 20 }} />,
  },
  {
    label: "Call",
    icon: <CallIcon sx={{ color: "primary.main", fontSize: 20 }} />,
  },
  {
    label: "Message",
    icon: <MessageIcon sx={{ color: "primary.main", fontSize: 20 }} />,
  },
  {
    label: "Calendar",
    icon: <CalendarMonthIcon sx={{ color: "primary.main", fontSize: 20 }} />,
  },
];

export default function ActionCard() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "stretch",
        justifyContent: "space-around",
        bgcolor: "background.paper",
        py: 2,
        px: 1,
        borderRadius: "16px",
        maxWidth: 600,
        mx: "auto",
        mb: 2,
        mt: 2,
        position: "relative",
        border: "1px solid #0E253C1A",
      }}
    >
      {actions.map((action, index) => (
        <Box
          key={action.label}
          sx={{
            flex: 1,
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 0.5,
            px: 1,
            position: "relative",
          }}
        >
          {action.icon}
          <Typography variant="caption" color="text.primary">
            {action.label}
          </Typography>

          {/* Vertical Divider */}
          {index !== actions.length - 1 && (
            <Divider
              orientation="vertical"
              flexItem
              sx={{
                position: "absolute",
                top: "20%",
                right: 0,
                height: "79%",
                borderColor: "#e0e0e0",
              }}
            />
          )}
        </Box>
      ))}
    </Box>
  );
}
