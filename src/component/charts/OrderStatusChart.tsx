'use client';

import {
  Box,
  Typography,
  Grid as MuiGrid,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Card,
  CardContent,
} from '@mui/material';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import DashboardIcon from '@mui/icons-material/Dashboard';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import PendingIcon from '@mui/icons-material/Pending';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import CancelIcon from '@mui/icons-material/Cancel';
import { useState } from 'react';

const statusData = [
  { label: 'All', value: 50, icon: <DashboardIcon /> },
  { label: 'New', value: 50, icon: <NewReleasesIcon /> },
  { label: 'Pending', value: 50, icon: <PendingIcon /> },
  { label: 'Dispatched', value: 50, icon: <LocalShippingIcon /> },
  { label: 'Delivered', value: 123, icon: <DoneAllIcon /> },
  { label: 'Cancelled', value: 50, icon: <CancelIcon /> },
];

const pieData = [
  { name: 'New', value: 50, color: '#f87171' },
  { name: 'Pending', value: 50, color: '#60a5fa' },
  { name: 'Dispatched', value: 50, color: '#a78bfa' },
  { name: 'Delivered', value: 50, color: '#4ade80' },
  { name: 'Cancelled', value: 50, color: '#facc15' },
];

export default function OrderStatusChart() {
  const [category, setCategory] = useState('All Categories');
  const [year, setYear] = useState('2023');

  const total = pieData.reduce((acc, cur) => acc + cur.value, 0);

  return (
    <Card
      sx={{
        p: 2,
        borderRadius: 4,
        backgroundColor: "background.default",
      }}
    >
      <CardContent>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <Typography variant="h6" fontWeight="600">
            Order Status
          </Typography>
          <Box display="flex" gap={2}>
            <FormControl size="small">
              <Select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                sx={{ minWidth: 140, fontSize: 14 }}
              >
                <MenuItem value="All Categories">All Categories</MenuItem>
                <MenuItem value="Electronics">Electronics</MenuItem>
                <MenuItem value="Apparel">Apparel</MenuItem>
              </Select>
            </FormControl>
            <FormControl size="small">
              <Select
                value={year}
                onChange={(e) => setYear(e.target.value)}
                sx={{ minWidth: 100, fontSize: 14 }}
              >
                <MenuItem value="2023">2023</MenuItem>
                <MenuItem value="2022">2022</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>

        <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0 }}>
          <Box>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: 0,
              }}
            >
              {statusData.map((item, idx) => (
                <Box
                  key={idx}
                  display="flex"
                  alignItems="center"
                  gap={1}
                  sx={{
                    borderBottom:
                      idx === statusData?.length - 1 ||
                      idx === statusData?.length - 2
                        ? "none"
                        : "1px solid #eee",
                    borderRight: idx % 2 === 0 ? "1px solid #eee" : "none",
                    pb: 1,
                    py: 4,
                    px: 2.5,
                  }}
                >
                  <Box color="primary.main">{item.icon}</Box>
                  <Box>
                    <Typography variant="subtitle2">{item.label}</Typography>
                    <Typography variant="body2" fontWeight="bold">
                      {item.value}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>

          <Box>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={50}
                  outerRadius={70}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <Box textAlign="center" mt={-10}>
              <Typography variant="h4" fontWeight="bold">
                {total}
              </Typography>
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
