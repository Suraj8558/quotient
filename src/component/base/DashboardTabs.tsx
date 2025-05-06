'use client';

import {
  Box,
  Tabs,
  Tab,
  Typography,
  Card,
  CardContent,
  Stack,
  IconButton,
} from '@mui/material';
import { useState } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const stats = [
  {
    title: 'Total Orders',
    value: '123',
    change: '+28%',
    positive: true,
    icon: '📦',
  },
  {
    title: 'Total Taken',
    value: '123',
    change: '-15%',
    positive: false,
    icon: '👤',
  },
  {
    title: 'Total Revenue',
    value: '123',
    change: '+28%',
    positive: true,
    icon: '💰',
  },
  {
    title: 'Pending Orders',
    value: '$1234.99',
    change: '-28%',
    positive: false,
    icon: '⏳',
  },
  {
    title: 'Pending Returns',
    value: '$1234.99',
    change: '-28%',
    positive: false,
    icon: '↩️',
  },
];

export default function DashboardTabs() {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (_: any, newValue: number) => {
    setTabIndex(newValue);
  };

  const scrollContainer = (dir: 'left' | 'right') => {
    const el = document.getElementById('scroll-container');
    if (el) el.scrollBy({ left: dir === 'right' ? 300 : -300, behavior: 'smooth' });
  };

  return (
    <Box sx={{ p: 2 }}>
      <Tabs
        value={tabIndex}
        onChange={handleTabChange}
        variant="scrollable"
        scrollButtons="auto"
        sx={{ mb: 2 }}
      >
        {['Dashboard', 'Orders', 'Address', 'Notes', 'Tasks', 'Contacts', 'Credit History'].map(
          (label, index) => (
            <Tab
              key={label}
              label={label}
              sx={{
                textTransform: 'none',
                fontWeight: tabIndex === index ? 600 : 400,
              }}
            />
          )
        )}
      </Tabs>

      <Box position="relative">
        <IconButton
          onClick={() => scrollContainer('left')}
          sx={{ position: 'absolute', left: -20, top: '40%', zIndex: 1 }}
        >
          <ArrowBackIosNewIcon />
        </IconButton>

        <Stack
          id="scroll-container"
          direction="row"
          spacing={2}
          sx={{
            overflowX: 'auto',
            pb: 1,
            scrollBehavior: 'smooth',
            // '&::-webkit-scrollbar': { display: 'none' },
          }}
        >
          {stats.map((stat, index) => (
            <Card
              key={index}
              sx={{
                minWidth: 200,
                p: 2,
                borderRadius: 3,
                boxShadow: '0 1px 5px rgba(0,0,0,0.1)',
                flexShrink: 0,
              }}
            >
              <CardContent>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  mb={1}
                >
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      fontSize: 24,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'linear-gradient(to bottom right, #ff80ab, #8c9eff)',
                    }}
                  >
                    {stat.icon}
                  </Box>
                </Box>

                <Typography variant="subtitle2" fontWeight={600}>
                  {stat.title}
                </Typography>
                <Typography variant="h6">{stat.value}</Typography>
                <Typography
                  variant="caption"
                  color={stat.positive ? 'green' : 'error'}
                >
                  {stat.positive ? '▲' : '▼'} {stat.change}
                </Typography>
                <Typography variant="caption" color="text.secondary" display="block">
                  From The Last Month
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Stack>

        <IconButton
          onClick={() => scrollContainer('right')}
          sx={{ position: 'absolute', right: -20, top: '40%', zIndex: 1 }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
