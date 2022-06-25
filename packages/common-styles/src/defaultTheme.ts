import colors from './colors';
import { ITheme } from './types';

const theme: ITheme = {
  palette: {
    fontWeight: {
      thin: 100,
      extraLight: 200,
      light: 300,
      regular: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
      extraBold: 800,
      black: 900,
    },
    borderRadius: '0.875rem',
    fontSize: {
      extraSmall: '0.75rem',
      small: '1rem',
      medium: '1.125rem',
      large: '1.25rem',
      extraLarge: '1.5rem',
    },
    hue: {
      pink: colors.pink,
      white: colors.white,
      black: colors.black,
      gray: colors.gray.gray100,
    },
  },
};

export default theme;
