"use client";

import { InputAdornment, TextField } from "@mui/material";
import React from "react";
import SearchIcon from "./icons/SearchIcon";

interface SearchProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

export const Search: React.FC<SearchProps> = ({
  value,
  onChange,
  placeholder = "Search",
}) => {
  return (
    <TextField
      fullWidth
      variant="outlined"
      size="small"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      sx={{
        '& .MuiOutlinedInput-root': {
          '&.Mui-focused fieldset': {
            borderColor: 'primary.main',
          }
        },
        '& .MuiInputBase-input::placeholder': {
          opacity: 1,
          color: 'primary.main'
        }
      }}
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ fontSize: 17 }} />
            </InputAdornment>
          ),
          sx: {
            borderRadius: "12px",
          },
        },
      }}
    />
  );
};
