"use client";

import {
  Box,
  Card,
  CardContent,
  Typography,
  ToggleButton,
  ToggleButtonGroup,
  MenuItem,
  Select,
  InputAdornment,
  TextField,
} from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import { useState, SyntheticEvent } from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const data = [
  { name: "Jan", value: 589.12 },
  { name: "Feb", value: 840.2 },
  { name: "Mar", value: 898.0 },
  { name: "Apr", value: 203.0 },
  { name: "May", value: 400.01 },
  { name: "Jun", value: 920.12 },
  { name: "Jul", value: 398.0 },
  { name: "Aug", value: 882.0 },
  { name: "Sep", value: 390.0 },
  { name: "Oct", value: 910.0 },
  { name: "Nov", value: 410.12 },
  { name: "Dec", value: 840.2 },
];

export default function RevenueChart() {
  const [tab, setTab] = useState("revenue");

  const handleTabChange = (_: SyntheticEvent, newTab: string) => {
    if (newTab !== null) setTab(newTab);
  };

  return (
    <Card sx={{ borderRadius: 4 }}>
      <CardContent>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          flexWrap="wrap"
          gap={2}
          mb={2}
        >
          <ToggleButtonGroup
            value={tab}
            exclusive
            onChange={handleTabChange}
            size="small"
            sx={{
              "& .MuiToggleButtonGroup-grouped": {
                borderRadius: "999px !important",
                px: 2,
              },
            }}
          >
            <ToggleButton value="revenue">Revenue</ToggleButton>
            <ToggleButton value="orders">Orders</ToggleButton>
            <ToggleButton value="customers">Customers</ToggleButton>
          </ToggleButtonGroup>

          <Box display="flex" gap={1}>
            <Select size="small" defaultValue="all" sx={{ borderRadius: 5 }}>
              <MenuItem value="all">All Categories</MenuItem>
              <MenuItem value="mobiles">Mobiles</MenuItem>
              <MenuItem value="fashion">Fashion</MenuItem>
            </Select>
            <TextField
              size="small"
              defaultValue="Jun 2023"
              sx={{ borderRadius: 5 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CalendarMonthIcon fontSize="small" />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </Box>

        <Typography fontWeight={600} mb={1}>
          Revenue
        </Typography>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip formatter={(value: number) => `$${value.toFixed(2)}`} />
            <Bar dataKey="value" fill="#5A41FF" radius={[8, 8, 0, 0]}>
              <LabelList
                dataKey="value"
                position="top"
                formatter={(value: number) => `$${value.toFixed(2)}`}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>

        <Box mt={2} textAlign="right">
          <Typography variant="body2" fontWeight={500}>
            Total Revenue:{" "}
            <Typography component="span" fontWeight={700}>
              $89,235.89
            </Typography>
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
