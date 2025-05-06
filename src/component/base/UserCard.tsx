'use client';

import { Box, Typography, Avatar, Chip, Link } from '@mui/material';

export default function UserCard() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        backgroundColor: 'background.paper',
        padding: 2,
        borderRadius: '16px',
        maxWidth: 390,
        border: '1px solid #0E253C1A',
        mb: 2,
      }}
    >
      {/* Avatar with Edit and status dot */}
      <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1.5 }}>
        <Avatar
          sx={{
            bgcolor: 'primary.light',
            width: 48,
            height: 48,
            fontWeight: 600,
            fontSize: 16,
            lineHeight: '125%',
          }}
        >
          TG
        </Avatar>

        {/* Status Dot */}
        <Box
          sx={{
            width: 10,
            height: 10,
            bgcolor: '#4CAF50',
            borderRadius: '50%',
            position: 'absolute',
            top: 4,
            right: 4,
            border: '2px solid white',
          }}
        />

        {/* Edit Text */}
        <Typography
          sx={{
            position: 'absolute',
            bottom: 0,
            bgcolor: '#F6F8F94D',
            color: 'white',
            px: 0.5,
            fontSize: 9,
            width: 1,
            padding: '1px',
            fontWeight: 500,
            textAlign: 'center',
          }}
        >
          Edit
        </Typography>
      </Box>

      <Box sx={{ flexGrow: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography sx={{ fontWeight: 600 }}>Truck Grear</Typography>
          <Chip
            label="BUSINESS"
            size="small"
            
            sx={{
              bgcolor: '#FFF4E5',
              color: '#C47F00',
              fontWeight: 500,
              lineHeight: '15px',
              padding:"8px 2px",
              fontSize: 10,
            }}
          />
        </Box>
        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
          jillali@onechanneladmin.com
        </Typography>
      </Box>

      <Link
        href="#"
        underline="hover"
        sx={{
          color: 'primary.light',
          fontSize: 12,
          whiteSpace: 'nowrap',
          alignSelf: 'flex-start'
        }}
      >
        Change Status
      </Link>
    </Box>
  );
}
