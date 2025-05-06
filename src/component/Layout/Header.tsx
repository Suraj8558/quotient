"use client";

import { AppBar, Toolbar, Box } from "@mui/material";
import ThemeToggle from "../ThemeToggle";
import { useState } from "react";
import { GridStyle, AppBarStyles, ToolbarStyles } from "./sxStyles";
import ProfileMenu from "../profile/ProfileMenu";
import { Search } from "../Search";
import NotificationMenu from "../profile/NotificationMenu";
import Image from "next/image";
import BreadcrumbsNav from "../BreadcrumbsNav";
import TimeRangeSelector from "../base/TimeRangeSelector";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <AppBar position="fixed" sx={{ ...AppBarStyles() }}>
      <Toolbar sx={{ ...ToolbarStyles() }}>
        <Box
          sx={{
            ...GridStyle(),
          }}
        >
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 10.75,
          }}>
            <Image
              src="/Company-logo.svg"
              alt="Company Logo"
              width={125}
              height={32}
              style={{ objectFit: "contain" }}
            />

            <Image
              src="/toggleMenu.svg"
              alt="Toggle Menu"
              width={28}
              height={28}
              style={{ cursor: "pointer" }}
            />
          </Box>

          <div style={{ width: "100%" }}>
            <Search
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifySelf: "flex-end",
              gap: 2,

            }}
          >
            <ThemeToggle />
            <NotificationMenu />
            <ProfileMenu />
          </Box>
        </Box>
      </Toolbar>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: 'center',
          py: 1.5,
          px: 2,
          ...ToolbarStyles()
        }}
      >
        <BreadcrumbsNav />
        <TimeRangeSelector />
      </Box>
    </AppBar>
  );
};

export default Header;
