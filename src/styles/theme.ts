import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    mainWhiteColor: string;
    mainDarkColor: string;
    mainTextColor: string;
    secondaryTextColor: string;
    accentBlueColor: string;
    accentSidebarColor: string;
    yellowColor: string;
    redColor: string;
    greenColor: string;
    grayLightColor: string;
    grayDarkColor: string;
    inputBgColor: string;
    inputBorderColor: string;
    inputIconColor: string;
    additionalInfoColor: string;
    borderColor: string;
    graphColor: string;
    bodyBgColor: string;
  }
  interface PaletteOptions {
    mainWhiteColor?: string;
    mainDarkColor?: string;
    mainTextColor?: string;
    secondaryTextColor?: string;
    accentBlueColor?: string;
    accentSidebarColor?: string;
    yellowColor?: string;
    redColor?: string;
    greenColor?: string;
    grayLightColor?: string;
    grayDarkColor?: string;
    inputBgColor?: string;
    inputBorderColor?: string;
    inputIconColor?: string;
    additionalInfoColor?: string;
    borderColor?: string;
    graphColor?: string;
    bodyBgColor?: string;
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
    mainWhiteColor: '#fff',
    mainDarkColor: '#363740',
    mainTextColor: '#252733',
    secondaryTextColor: '#9fa2b4',
    accentBlueColor: '#3751ff',
    accentSidebarColor: '#dde2ff',
    yellowColor: '#fec400',
    redColor: '#f12b2c',
    greenColor: '#29cc97',
    grayLightColor: '#a4a6b3',
    grayDarkColor: '#4b506d',
    inputBgColor: '#fcfdfe',
    inputBorderColor: '#f0f1f7',
    inputIconColor: '#b5b8c4',
    additionalInfoColor: '#c5c7cd',
    borderColor: '#dfe0eb',
    graphColor: '#ebedf0',
    bodyBgColor: '#f7f8fc',
  },
  spacing: 4,
});
