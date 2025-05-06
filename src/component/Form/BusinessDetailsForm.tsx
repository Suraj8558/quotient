'use client';

import {
  Box,
  TextField,
  Typography,
  Select,
  MenuItem,
  IconButton,
  Button,
  InputAdornment,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import SaveIcon from '@mui/icons-material/Save';
import RefreshIcon from '@mui/icons-material/Refresh';
import React, { useState } from 'react';

const countries = [
  { code: 'US', label: '🇺🇸 US' },
  { code: 'IN', label: '🇮🇳 IN' },
];

export default function BusinessDetailsForm() {
  const [phones, setPhones] = useState([{ country: 'US', number: '' }]);

  const handlePhoneChange = (index: number, key: string, value: string) => {
    const newPhones = [...phones];
    newPhones[index][key as keyof typeof newPhones[0]] = value;
    setPhones(newPhones);
  };

  const handleAddPhone = () => {
    setPhones([...phones, { country: 'US', number: '' }]);
  };

  const handleRemovePhone = (index: number) => {
    setPhones(phones.filter((_, i) => i !== index));
  };

  return (
    <Box
      sx={{
        p: 3,
        borderRadius: 4,
        backgroundColor: 'background.paper',
        maxWidth: 400,
        mx: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        boxShadow: '0 1px 6px rgba(0,0,0,0.1)',
      }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h6" fontWeight={600}>
          Business Details
        </Typography>
        <Button startIcon={<SaveIcon />} variant="text" color="success">
          Save & Close
        </Button>
      </Box>

      <TextField label="Account Name" fullWidth defaultValue="TRUCK GEAR" />
      <TextField label="Email" fullWidth defaultValue="Jillali@Onechanneladmin.Com" />

      <Typography variant="subtitle2" mt={2}>
        Phone Number
      </Typography>
      {phones.map((phone, index) => (
        <Box key={index} display="flex" gap={1} alignItems="center">
          <Select
            size="small"
            value={phone.country}
            onChange={(e) => handlePhoneChange(index, 'country', e.target.value)}
            sx={{ minWidth: 80 }}
          >
            {countries.map((c) => (
              <MenuItem key={c.code} value={c.code}>
                {c.label}
              </MenuItem>
            ))}
          </Select>
          <TextField
            size="small"
            placeholder="+1 344 434 4455"
            value={phone.number}
            onChange={(e) => handlePhoneChange(index, 'number', e.target.value)}
            fullWidth
          />
          <IconButton color="error" onClick={() => handleRemovePhone(index)}>
            <DeleteOutlineIcon />
          </IconButton>
        </Box>
      ))}
      <Box>
        <IconButton color="primary" onClick={handleAddPhone}>
          <AddIcon />
        </IconButton>
      </Box>

      <Select fullWidth size="small" defaultValue="Suchithkumar@Onechanneladmin.Com">
        <MenuItem value="Suchithkumar@Onechanneladmin.Com">
          Suchithkumar@Onechanneladmin.Com
        </MenuItem>
      </Select>

      <Select fullWidth size="small" defaultValue="Partner">
        <MenuItem value="Partner">Partner</MenuItem>
      </Select>

      <Select fullWidth size="small" defaultValue="Accounting">
        <MenuItem value="Accounting">Accounting</MenuItem>
      </Select>

      <TextField fullWidth size="small" defaultValue="WWW.TRUCKGEAR.COM" label="Website" />
      <TextField fullWidth size="small" defaultValue="10" label="No. of Employee" />

      {/* Credit Limit */}
      <TextField
        fullWidth
        size="small"
        label="Credit Limit"
        defaultValue="5000"
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
          endAdornment: (
            <InputAdornment position="end">
              <IconButton size="small" color="primary">
                <AddIcon fontSize="small" />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      {/* Available Credit */}
      <TextField
        fullWidth
        size="small"
        label="Available Credit"
        defaultValue="806.71"
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
          endAdornment: (
            <InputAdornment position="end">
              <IconButton size="small" color="primary">
                <RefreshIcon fontSize="small" />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}
