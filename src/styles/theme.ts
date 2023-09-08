import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    grayLightColor: string;
    redColor: string;
    // Додайте інші власні кольори, які вам потрібні
  }
  interface PaletteOptions {
    grayLightColor?: string;
    redColor?: string;
    // Додайте інші власні кольори, які вам потрібні
  }
}

export const theme = createTheme({
  components: {
    MuiSvgIcon: {
      styleOverrides: {
        fontSizeLarge: {
          fontSize: '32px',
        },
        fontSizeMedium: {
          fontSize: '24px',
        },
        fontSizeSmall: {
          fontSize: '16px',
        },
      },
    },
  },
  typography: {
    fontFamily: 'Mulish, sans-serif',
    h2: {
      fontSize: 24,
      fontWeight: 700,
      lineHeight: 1.3,
      letterSpacing: 0.3,
    },
    h3: {
      fontSize: 19,
      fontWeight: 700,
      lineHeight: 1.3,
      letterSpacing: 0.4,
    },
    subtitle1: {
      fontSize: 14,
      lineHeight: 1.43,
      letterSpacing: 0.3,
    },
  },
  palette: {
    grayLightColor: '#a4a6b3',
    redColor: '#f12b2c',
  },
  spacing: 4,
});
