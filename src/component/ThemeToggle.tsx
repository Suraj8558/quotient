"use client";

import { IconButton } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { toggleTheme } from "@/store/themeSlice";

const ThemeToggle = () => {
  const mode = useAppSelector((state) => state.theme.mode);
  const dispatch = useAppDispatch();

  return (
    <IconButton onClick={() => dispatch(toggleTheme())} color="inherit">
      {mode === "dark" ? (
        <Brightness7 sx={{ color: "#FDB813" }} />
      ) : (
        <Brightness4 sx={{ color: "#6E6E6E" }} />
      )}
    </IconButton>
  );
};

export default ThemeToggle;
