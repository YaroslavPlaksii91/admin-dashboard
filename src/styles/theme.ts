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
    MuiButton: {
      styleOverrides: {
        root: {
          padding: 0,
          minWidth: 0,
        },
        contained: {
          height: 48,
          fontSize: 14,
          fontWeight: 600,
          lineHeight: 1.43,
          letterSpacing: 0.2,
          textTransform: 'none',
          borderRadius: 8,
          backgroundColor: '#3751FF',
          boxShadow: '0px 4px 12px 0px rgba(55, 81, 255, 0.24)',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          marginTop: 0,
          marginBottom: 40,
          borderRadius: '8px',
          borderWidth: '1px',
          borderStyle: 'solid',
          backgroundColor: '#FCFDFE',
          borderColor: '#F0F1F7',
          '&:has(.Mui-focused)': {
            borderColor: '#3751ff',
          },
          '&:has(.Mui-error)': {
            borderColor: '#f12b2c',
          },
          fieldset: {
            border: 'none',
          },
          input: {
            padding: '11px 16px',
            fontSize: 14,
            fontWeight: 400,
            lineHeight: 1.43,
            letterSpacing: 0.3,
            color: '#4B506D',
          },
          p: {
            position: 'absolute',
            top: '100%',
            left: 0,
            margin: 0,
          },
          div: {
            borderRadius: '8px',
          },
          button: {
            color: '#9fa2b4',
            padding: 0,
            paddingRight: '16px',
            '&:hover': {
              backgroundColor: '#FCFDFE',
            },
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          top: -10,
          left: -15,
          fontSize: 16,
          fontWeight: 700,
          textTransform: 'uppercase',
          lineHeight: 1.3,
          letterSpacing: 0.3,
          color: '#9FA2B4',
          '&.Mui-focused': {
            color: '#3751ff',
          },
          '&.Mui-error': {
            color: '#f12b2c',
          },
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
