"use client";

import {
  Box,
  Tabs,
  Tab,
  Typography,
  Card,
  Stack,
  IconButton,
} from "@mui/material";
import { useState, SyntheticEvent } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Image from "next/image";

const stats = [
  {
    title: "Total Orders",
    value: "123",
    change: "+28%",
    positive: true,
    icon: "/icon1.svg",
  },
  {
    title: "Total Taken",
    value: "123",
    change: "-15%",
    positive: false,
    icon: "/icon2.svg",
  },
  {
    title: "Total Revenue",
    value: "123",
    change: "+28%",
    positive: true,
    icon: "/icon3.svg",
  },
  {
    title: "Pending Orders",
    value: "$1234.99",
    change: "-28%",
    positive: false,
    icon: "/icon4.svg",
  },
  {
    title: "Pending Returns",
    value: "$1234.99",
    change: "-28%",
    positive: false,
    icon: "/icon5.svg",
  },
];

export default function DashboardTabs() {
  const [tabIndex, setTabIndex] = useState(0);

 const handleTabChange = (_: SyntheticEvent, newValue: number) => {
   setTabIndex(newValue);
 };

  const scrollContainer = (dir: "left" | "right") => {
    const el = document.getElementById("scroll-container");
    if (el)
      el.scrollBy({ left: dir === "right" ? 300 : -300, behavior: "smooth" });
  };

  return (
    <Box>
      <Tabs
        value={tabIndex}
        onChange={handleTabChange}
        variant="scrollable"
        scrollButtons="auto"
        sx={{ mb: 2 }}
      >
        {[
          "Dashboard",
          "Orders",
          "Address",
          "Notes",
          "Tasks",
          "Contacts",
          "Credit History",
        ].map((label, index) => (
          <Tab
            key={label}
            label={label}
            sx={{
              textTransform: "none",
              fontWeight: tabIndex === index ? 600 : 400,
            }}
          />
        ))}
      </Tabs>

      <Box position="relative">
        <IconButton
          onClick={() => scrollContainer("left")}
          sx={{
            position: "absolute",
            left: -10,
            top: "40%",
            zIndex: 1,
            backgroundColor: "background.paper",
            boxShadow: "0px 3px 6px 0px #0000001A",
            width: 24,
            height: 24,
          }}
        >
          <ArrowBackIosNewIcon
            sx={{
              fontSize: 16,
              color: "primary.main",
            }}
          />
        </IconButton>

        <Stack
          id="scroll-container"
          direction="row"
          spacing={2}
          sx={{
            overflowX: "auto",
            pb: 1,
            scrollBehavior: "smooth",
            // '&::-webkit-scrollbar': { display: 'none' },
          }}
        >
          {stats.map((stat, index) => (
            <Card
              key={index}
              sx={{
                minWidth: 200,
                borderRadius: 4,
                flexGrow: 1,
                backgroundColor: "background.default",
                border: "1px solid #0E253C1A",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  width: 1,
                  borderBottom: "1px solid #0E253C1A",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "pace-between",
                    py: 2,
                    px: 2.5,
                  }}
                >
                  <Box>
                    <Image
                      src={stat?.icon}
                      alt="Company Logo"
                      width={54}
                      height={54}
                      style={{ objectFit: "contain" }}
                    />
                  </Box>
                </Box>

                <Box>
                  <Typography variant="caption" fontWeight={600}>
                    {stat.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: 22,
                      lineHeight: "32px",
                      fontWeight: 600,
                    }}
                  >
                    {stat.value}
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 2,
                  backgroundColor: "background.paper",
                  py: 1.5,
                  px: 2.5,
                  
                }}
              >
                <Typography
                  variant="caption"
                  color={stat.positive ? "green" : "error"}
                >
                  {stat.positive ? "▲" : "▼"} {stat.change}
                </Typography>
                <Typography
                  variant="caption"
                  color="text.secondary"
                  display="block"
                >
                  From The Last Month
                </Typography>
              </Box>
            </Card>
          ))}
        </Stack>

        <IconButton
          onClick={() => scrollContainer("right")}
          sx={{
            position: "absolute",
            right: -10,
            top: "40%",
            zIndex: 1,
            backgroundColor: "background.paper",
            boxShadow: "0px 3px 6px 0px #0000001A",
            width: 24,
            height: 24,
          }}
        >
          <ArrowForwardIosIcon
            sx={{
              fontSize: 16,
              color: "primary.main",
            }}
          />
        </IconButton>
      </Box>
    </Box>
  );
}
