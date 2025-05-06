'use client';

import {
  Box,
  Typography,
  Avatar,
  Button,
  Card,
  CardContent,
  Stack,
  Divider,
} from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import ChatIcon from '@mui/icons-material/Chat';

const activities = [
  {
    group: 'Today',
    items: [
      {
        user: 'Christian Wood',
        action: 'Sent Message to',
        target: 'Nikita Houston',
        time: '1 min ago',
        color: 'orange',
      },
      {
        user: 'Nikita Houston',
        action: 'Replay your message',
        target: '"Hello"',
        time: '1 min ago',
        color: 'purple',
      },
      {
        user: 'Christian Wood',
        action: 'Accept Order from',
        target: 'Ebay',
        time: '1 min ago',
        color: 'red',
      },
      {
        user: 'Rohan Walker',
        action: 'Replay your message',
        target: 'Ebay',
        time: '1 min ago',
        color: 'grey',
      },
    ],
  },
  {
    group: 'Yesterday',
    items: [
      {
        user: 'Christian Wood',
        action: 'Accept Order from',
        target: 'Amazon',
        time: '12:30PM',
        color: 'blue',
      },
    ],
  },
  {
    group: '25 May 2024',
    items: [
      {
        user: 'Christian Wood',
        action: 'Accept Order from',
        target: 'Walmart',
        time: '11:20AM',
        color: 'green',
      },
    ],
  },
];

const getInitials = (name: string) => {
  const names = name.split(' ');
  return names.map((n) => n[0]).join('');
};

export default function RecentActivities() {
  return (
    <Card sx={{ borderRadius: 4 ,
        backgroundColor: "background.default",
        border: "1px solid #0E253C1A",
    }}>
      <CardContent>
        <Box display="flex" justifyContent="space-between" mb={2}>
          <Typography fontWeight={600}>Recent Activities</Typography>
          <Stack direction="row" spacing={1}>
            <Button variant="outlined" size="small" startIcon={<ChatIcon />} sx={{ fontSize: 12 }}>
              Message
            </Button>
            <Button variant="outlined" size="small" startIcon={<MailIcon />} sx={{ fontSize: 12 }}>
              Email
            </Button>
          </Stack>
        </Box>

        {activities.map((section, index) => (
          <Box key={index} mt={2}>
            <Typography variant="subtitle2" color="text.secondary" gutterBottom>
              {section.group}
            </Typography>
            <Stack spacing={2}>
              {section.items.map((item, idx) => (
                <Box key={idx} display="flex" alignItems="flex-start" gap={1.5}>
                  <Avatar
                    sx={{
                      bgcolor: item.color,
                      width: 28,
                      height: 28,
                      fontSize: 12,
                    }}
                  >
                    {getInitials(item.user)}
                  </Avatar>
                  <Box>
                    <Typography fontSize={14}>
                      <strong style={{ color: '#3b82f6' }}>{item.user}</strong> {item.action}{' '}
                      <strong style={{ color: '#8b5cf6' }}>{item.target}</strong>
                    </Typography>
                    <Typography fontSize={12} color="text.secondary">
                      {item.time}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Stack>
            {index < activities.length - 1 && <Divider sx={{ my: 2 }} />}
          </Box>
        ))}
      </CardContent>
    </Card>
  );
}
