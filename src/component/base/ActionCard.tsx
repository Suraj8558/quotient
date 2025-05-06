
'use client';
import { Box, Typography, Divider } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import MessageIcon from '@mui/icons-material/Message';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const actions = [
  { label: 'Email', icon: <EmailIcon sx={{ color: '#0D2535' }} /> },
  { label: 'Call', icon: <CallIcon sx={{ color: '#0D2535' }} /> },
  { label: 'Message', icon: <MessageIcon sx={{ color: '#0D2535' }} /> },
  { label: 'Calendar', icon: <CalendarMonthIcon sx={{ color: '#0D2535' }} /> },
];

export default function ActionCard() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        bgcolor: 'background.paper',
        p: 2,
        borderRadius: '16px',
        boxShadow: '0 1px 4px rgba(0,0,0,0.1)',
        maxWidth: 600,
        mx: 'auto',
        mb: 2,
        mt: 2

      }}
    >
      {actions.map((action, index) => (
        <Box
          key={action.label}
          sx={{
            flex: 1,
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 0.5,
            px: 1,
          }}
        >
          {action.icon}
          <Typography variant="body2" color="text.primary" fontWeight={500}>
            {action.label}
          </Typography>
          {index !== actions.length - 1 && (
            <Divider
              orientation="vertical"
              flexItem
              sx={{
                position: 'absolute',
                height: '60%',
                right: 0,
                borderColor: '#e0e0e0',
              }}
            />
          )}
        </Box>
      ))}
    </Box>
  );
}
