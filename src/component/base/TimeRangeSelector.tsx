"use client";

import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useState } from "react";

export default function TimeRangeSelector() {
  const [alignment, setAlignment] = useState("day");

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleChange}
      sx={{
        backgroundColor: "background.default",
        "& .MuiToggleButton-root": {
          border: "none",
          textTransform: "none",
          fontWeight: "500",
          color: "#1e293b",
          padding: "6px 16px",
          "&.Mui-selected": {
            backgroundColor: "background.paper",
            boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)",
          },
          "&:hover": {
            backgroundColor: "#e2e8f0",
          },
        },
      }}
    >
      <ToggleButton value="day">Day</ToggleButton>
      <ToggleButton value="week">Week</ToggleButton>
      <ToggleButton value="year">Year</ToggleButton>
    </ToggleButtonGroup>
  );
}
