import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: '#262522',
      contrastText: '#C6C6C5',
    },
    secondary: {
      main: '#80B64B',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#302E2B',
      paper: '#262522',
    },
    text: {
      secondary: '#C3C2C2',
      primary: '#DFDEDE',
    },
    error: {
      main: '#f44336',
    },
    divider: 'rgba(183,178,177,0.29)',
  },
})