'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4169E1', // Royal Blue
    },
    secondary: {
      main: '#40E0D0', // Turquoise
    },
    background: {
      default: '#F5F5F5', // Light Gray
    },
    text: {
      primary: '#333333', // Dark Gray
      secondary: '#666666', // Medium Gray
    },
    error: {
      main: '#DC143C', // Red
    },
    success: {
      main: '#32CD32', // Green
    },
    warning: {
      main: '#FF7F50', // Coral (used for accents here)
    },
  },
  typography: {
    h1: {
      fontFamily: 'Roboto, sans-serif',
      fontSize: '48px',
      fontWeight: 700,
      color: '#4169E1', // Royal Blue
      textAlign: 'center',
      marginTop: '10px',
      marginBottom: '20px',
      textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)',
      letterSpacing: '1px',
    },
  },
});

export default theme;
