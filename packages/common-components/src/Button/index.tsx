import {
  ButtonHTMLAttributes,
  forwardRef,
  MouseEventHandler,
  useMemo,
} from 'react';

import { css, useTheme } from '@emotion/react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  type?: 'button' | 'reset' | 'submit';
  color?: 'primary' | 'negative' | 'default';
  size?: 'small' | 'big';
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  text?: string;
  testId?: string;
}

const buttonStyle = css`
  color: inherit;
  cursor: pointer;
  border: none;
  outline: none;
  background: none;
  &:disabled {
    cursor: default;
  }
`;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      type = 'button',
      color = 'primary',
      size = 'small',
      onClick,
      text,
      disabled = false,
      testId,
      children,
      ...props
    },
    ref
  ) => {
    const theme = useTheme();

    const colors = useMemo(
      () => ({
        primary: theme.palette.hue.pink,
        negative: theme.palette.hue.black,
        default: theme.palette.hue.gray,
      }),
      [theme]
    );

    const baseStyle = css`
      border-radius: ${theme.palette.borderRadius};
    `;

    const colorStyle = useMemo(
      () => css`
        background-color: ${colors[color]};
        color: ${theme.palette.hue.white};
        filter: drop-shadow(0 0.25rem 1rem ${`${colors[color]}19`});
      `,
      [color, colors, theme]
    );

    const sizeStyle = useMemo(() => {
      switch (size) {
        case 'small':
          return css`
            font-size: ${theme.palette.fontSize.extraSmall};
            font-weight: ${theme.palette.fontWeight.extraBold};
            padding: 0.45rem 0.625rem;
          `;
        case 'big':
          return css`
            width: 100%;
            padding: 15px 0;
            font-size: ${theme.palette.fontSize.medium};
            font-weight: ${theme.palette.fontWeight.extraBold};
          `;
        default:
          return css`
            font-size: ${theme.palette.fontSize.extraSmall};
            font-weight: ${theme.palette.fontWeight.extraBold};
            padding: 0.45rem 0.625rem;
          `;
      }
    }, [size, theme]);

    return (
      <button
        ref={ref}
        // eslint-disable-next-line react/button-has-type
        type={type}
        className={className}
        onClick={onClick}
        disabled={disabled}
        css={[buttonStyle, baseStyle, colorStyle, sizeStyle]}
        data-testid={testId}
        {...props}
      >
        {children ?? text}
      </button>
    );
  }
);

export default Button;
