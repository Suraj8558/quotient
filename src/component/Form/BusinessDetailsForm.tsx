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
        p: 2,
        borderRadius: 4,
        backgroundColor: 'background.paper',
        maxWidth: 390,
        mx: 'auto',
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        boxShadow: '0 1px 6px rgba(0,0,0,0.1)',
      }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="body1" fontWeight={600}>
          Business Details
        </Typography>
        <Button startIcon={<SaveIcon />} variant="text" sx={{ color: '#22C55E' }}>
          Save & Close
        </Button>
      </Box>


        <Box sx={{
          borderBottom: '1px solid #0E253C1A',
          pb: 1.5,
        }}>
          <Typography variant="caption" fontWeight={500} mb={0.5}>
            Account Name
          </Typography>
          <TextField
            fullWidth
            defaultValue="TRUCK GEAR"
            variant="outlined"
            placeholder="Enter account name"
          />
        </Box>

        <Box sx={{
          borderBottom: '1px solid #0E253C1A',
          pb: 1.5,
        }}>
          <Typography variant="caption" fontWeight={500} mb={0.5}>
            Email
          </Typography>
          <TextField
            fullWidth
            defaultValue="Jillali@Onechanneladmin.Com"
            variant="outlined"
            placeholder="Enter email"
          />
        </Box>

    <Box sx={{display:'flex', justifyContent: 'space-between', alignItems: 'center', gap: 2}}> 
      <Typography variant="caption">
        Phone Number
      </Typography>
      <IconButton sx={{color: 'primary.light'}} onClick={handleAddPhone}>
        <AddIcon />
      </IconButton>      
    </Box>

      {phones.map((phone, index) => (
        <Box key={index} display="flex" gap={1} alignItems="center">
          <Select
            size="small"
            value={phone.country}
            onChange={(e) => handlePhoneChange(index, 'country', e.target.value)}
           sx={{
              '& input::placeholder': {
                color: 'primary.main',
                opacity: 1,
              },
              '& .MuiInputBase-input': {
                paddingRight: '0',
              },
            }}
          >
            {countries.map((c) => (
              <MenuItem key={c.code} value={c.code}>
                {c.label}
              </MenuItem>
            ))}
          </Select>
          <TextField
            size="small"
            variant="outlined"
            placeholder="+1 344 434 4455"
            value={phone.number}
            onChange={(e) => handlePhoneChange(index, 'number', e.target.value)}
            fullWidth
             sx={{
              '& input::placeholder': {
                color: 'primary.main',
                opacity: 1,
              },
              '& .MuiInputBase-input': {
                paddingRight: '0',
              },
            }}
          />
          <IconButton color="error"
          sx={{
            fontSize: 12,
             border:  '1px solid #DC3545',
             padding: "10px 16px", 
             color: '#DC3545',
             borderRadius: 3,
          }} 
          onClick={() => handleRemovePhone(index)}>
            Remove
          </IconButton>
        </Box>
      ))}

        <Box sx={{
          borderBottom: '1px solid #0E253C1A',
          pb: 1.5,
        }}>
          <Typography variant="caption" fontWeight={500} mb={0.5}>
            Contact Owner
          </Typography>
            <Select fullWidth size="small" defaultValue="Suchithkumar@Onechanneladmin.Com">
            <MenuItem value="Suchithkumar@Onechanneladmin.Com">
              Suchithkumar@Onechanneladmin.Com
            </MenuItem>
          </Select>
        </Box>
     

        <Box sx={{
          borderBottom: '1px solid #0E253C1A',
          pb: 1.5,
        }}>
          <Typography variant="caption" fontWeight={500} mb={0.5}>
           Company Type
          </Typography>
           <Select fullWidth size="small" defaultValue="Partner">
            <MenuItem value="Partner">Partner</MenuItem>
          </Select>
        </Box>
     
      
        <Box sx={{
          borderBottom: '1px solid #0E253C1A',
          pb: 1.5,
        }}>
          <Typography variant="caption" fontWeight={500} mb={0.5}>
            Industry
          </Typography>
            <Select fullWidth size="small" defaultValue="Accounting">
             <MenuItem value="Accounting">Accounting</MenuItem>
            </Select>
        </Box>

         <Box sx={{
          borderBottom: '1px solid #0E253C1A',
          pb: 1.5,
        }}>
          <Typography variant="caption" fontWeight={500} mb={0.5}>
            Website
          </Typography>
            <TextField variant="outlined" fullWidth size="small" defaultValue="WWW.TRUCKGEAR.COM"  />

        </Box>

          <Box sx={{
          borderBottom: '1px solid #0E253C1A',
          pb: 1.5,
        }}>
          <Typography variant="caption" fontWeight={500} mb={0.5}>
            No. Of Employee
          </Typography>
            <TextField variant="outlined" type="number" fullWidth size="small" defaultValue="10"  />  
        </Box>



      {/* Credit Limit */}
        <Box sx={{
          borderBottom: '1px solid #0E253C1A',
          pb: 1.5,
        }}>
          <Typography variant="caption" fontWeight={500} mb={0.5}>
            Credit Limit
          </Typography>
          <TextField
          fullWidth
          size="small"
          variant="outlined"
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
          sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  border: 'none', 
                },
              },
            }}
        />
      </Box>
      

      {/* Available Credit */}

       <Box sx={{
          pb: 1.5,
        }}>
          <Typography variant="caption" fontWeight={500} mb={0.5}>
            Available Credit
          </Typography>
         <TextField
            fullWidth
            size="small"
            variant="outlined"
            defaultValue="806.71"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton size="small" color="primary">
                    <RefreshIcon fontSize="small" />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  border: 'none', 
                },
              },
            }}
          />

      </Box>
      
    </Box>
  );
}
