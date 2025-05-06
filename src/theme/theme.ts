import { createTheme } from "@mui/material/styles";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const lightTheme = {
  primary: {
    main: '#0E253C',
    light: '#513CCE',
    dark: '#1565c0',
  },
  secondary: {
    main: '#0E253CD9',
    light: '#ba68c8', 
    dark: '#7b1fa2',
  },
  background: {
    default: '#F6F8F9',
    paper: '#ffffff',
  },
  text: {
    primary: '#0E253C',
    secondary: '#0E253CD9',
    white: '#FFFFFF',
    black: '#000000'
  },
  border: {
    primary: '#0E253C1A'
  }

};

const darkTheme = {
  primary: {
    main: '#90caf9',
    light: '#e3f2fd',
    dark: '#42a5f5',
  },
  secondary: {
    main: '#FFFFFFCC',
    light: '#f3e5f5',
    dark: '#ab47bc',
  },
  background: {
    default: '#010D19',
    paper: '#001121',
  },
  text: {
    primary: '#ffffff',
    secondary: '#ffffff',
    white: '#FFFFFF',
    black: '#000000'
  }
};

export const getTheme = (mode: "light" | "dark") =>
  createTheme({
    palette: {
      mode,
      ...(mode === 'light' ? lightTheme : darkTheme),
    },
    typography: {
      fontFamily: "Inter, sans-serif",
      caption: {
        fontSize: 12,
        lineHeight: '18px',
        fontWeight: 400
      }
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            textTransform: 'none',
            fontWeight: 500,
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            '& .MuiOutlinedInput-root': {
              borderRadius: 12,
              fontSize: 14,
              lineHeight: '22px',
              color: mode === 'light' ? '#0E253C' : '#ffffff',
              '& fieldset': {
                borderColor: mode === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)'
              },
              '&:hover fieldset': {
                borderColor: mode === 'light' ? 'rgba(0, 0, 0, 0.87)' : 'rgba(255, 255, 255, 0.87)'
              }
            },
            '& .MuiInputBase-input': {
              fontSize: 14,
              lineHeight: '22px',
              color: mode === 'light' ? '#0E253C' : '#ffffff',
            },
            input: {
              padding: '8px 12px',
            },
          },
          
          
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            boxShadow: '0 1px 3px rgba(0,0,0,0.12)',
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: 12,
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: 12,
          },
        },
      },
      MuiDialog: {
        styleOverrides: {
          paper: {
            borderRadius: 12,
          },
        },
      },
      MuiSelect: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            fontSize: 14,
            lineHeight: '22px',
            color: mode === 'light' ? '#0E253C' : '#ffffff',
          },
        },
        defaultProps: {
          IconComponent: KeyboardArrowDownIcon
        }
      },
      MuiCheckbox: {
        styleOverrides: {
          root: {
            borderRadius: 12,
          },
        },
      },
      MuiInputBase: {
        styleOverrides: {
          root: {
            fontSize: 14,
            lineHeight: '22px',
            color: mode === 'light' ? '#0E253C' : '#ffffff',
          }
        }
      },
      MuiToggleButtonGroup: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            border: '1px solid rgba(0, 0, 0, 0.12)'
          }
        }
      },
      MuiToggleButton: {
        styleOverrides: {
          root: {
            borderRadius: '12px 12px 12px 12px',
            textTransform: 'none',
            fontWeight: 500,
            color: mode === 'light' ? '#0E253C' : '#ffffff',
            '&.Mui-selected': {
              backgroundColor: mode === 'light' ? '#ffffff' : '#001121',
              border: '1px solid #0E253C1A',
              boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
              '&:hover': {
                backgroundColor: mode === 'light' ? '#f8fafc' : '#001e3c'
              }
            },
            '&:hover': {
              backgroundColor: mode === 'light' ? '#e2e8f0' : '#132f4c'
            },
            '&.MuiToggleButtonGroup-grouped': {
              borderRadius: 12,
              '&.MuiToggleButtonGroup-middleButton': {
                borderRadius: 12,
              },
              '&.MuiToggleButtonGroup-lastButton': {
                borderRadius: 12,
              }
            }
          }
        }
      }
    },
  });
