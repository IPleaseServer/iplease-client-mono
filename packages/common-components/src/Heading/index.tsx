import { useMemo } from 'react';

import { css, useTheme } from '@emotion/react';

export interface HeadingProps {
  level: 'h1' | 'h2' | 'h3';
  text: string;
  color?: 'primary' | 'black';
}

const Heading: React.FC<HeadingProps> = ({
  level,
  text,
  color = 'primary',
}) => {
  const HeadingTag = `${level}` as keyof JSX.IntrinsicElements;
  const theme = useTheme();

  const baseStyle = css`
    margin: 0;
    padding: 0;
    font-weight: bold;
  `;

  const levelStyle = useMemo(() => {
    switch (level) {
      case 'h1':
        return css`
          font-size: ${theme.palette.fontSize.extraLarge};
          margin: 50px 0;
        `;
      case 'h2':
        return css`
          font-size: ${theme.palette.fontSize.large};
          margin: 15px 0;
        `;
      case 'h3':
        return css`
          font-size: ${theme.palette.fontSize.medium};
          margin: 15px 0;
        `;
      default:
        return css`
          font-size: ${theme.palette.fontSize.extraLarge};
          margin: 50px 0;
        `;
    }
  }, [theme, level]);

  const colorStyle = useMemo(() => {
    switch (color) {
      case 'primary':
        return css`
          color: ${theme.palette.hue.pink};
        `;
      case 'black':
        return css`
          color: ${theme.palette.hue.black};
        `;
      default:
        return css`
          color: ${theme.palette.hue.black};
        `;
    }
  }, [theme, color]);

  return (
    <HeadingTag css={[baseStyle, levelStyle, colorStyle]}>{text}</HeadingTag>
  );
};

export default Heading;
