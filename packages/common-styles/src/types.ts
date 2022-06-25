export type HexaString = `#${string}`;
export type RemString = `${number}rem`;

export interface ITheme {
  palette: {
    fontWeight: {
      thin: number;
      extraLight: number;
      light: number;
      regular: number;
      medium: number;
      semiBold: number;
      bold: number;
      extraBold: number;
      black: number;
    };
    borderRadius: RemString;
    fontSize: {
      extraSmall: RemString;
      small: RemString;
      medium: RemString;
      large: RemString;
      extraLarge: RemString;
    };
    hue: {
      pink: HexaString;
      white: HexaString;
      black: HexaString;
      gray: HexaString;
    };
  };
}

export interface IGray {
  gray100: HexaString;
  gray200: HexaString;
}
