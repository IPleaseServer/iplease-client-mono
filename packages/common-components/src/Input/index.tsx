import {
  ChangeEvent,
  ChangeEventHandler,
  FocusEventHandler,
  forwardRef,
  useMemo,
  useState,
} from 'react';

import { css, useTheme } from '@emotion/react';
import cx from 'clsx';
import cuid from 'cuid';

import { colors } from '@common/styles';

export interface InputProps {
  className?: string;
  type?: 'text' | 'number' | 'file' | 'password' | 'hidden' | 'date';
  name?: string;
  placeholder?: string;
  prefix?: string;
  postfix?: string;
  value?: string | number;
  defaultValue?: string | number;
  disabled?: boolean;
  min?: string | number;
  max?: string | number;
  step?: number;
  accept?: string;
  multiple?: boolean;
  align?: 'left' | 'right';
  autoComplete?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  testId?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      prefix = '',
      postfix = '',
      type = 'text',
      disabled,
      onChange,
      onFocus,
      onBlur,
      testId,
      align = 'left',
      ...inputProps
    },
    ref
  ) => {
    const [id] = useState<string>(cuid());
    const [isActive, setIsActive] = useState<boolean>(false);
    const theme = useTheme();

    const handleChange = useMemo(
      () => (event: ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
          onChange(event);
        }
      },
      [onChange]
    );

    const inputRootStyle = useMemo(
      () => css`
        width: 100%;
        display: ${type === 'hidden' ? 'none' : 'inline-flex'};
        position: relative;
        border: 2px solid ${isActive ? colors.pink : colors.gray.gray200};
        ${isActive &&
        `
          filter: drop-shadow(0 0.25rem 1rem ${`${colors.pink}19`});
        `}
        border-radius: ${theme.palette.borderRadius};
        padding: 0.895rem 1.125rem;
        font-size: ${theme.palette.fontSize.small};
        font-family: Pretendard;
        transition: 200ms border;
        label {
          flex-grow: 1;
        }
        input {
          width: 100%;
          outline: none;
          border: none;
          padding: 0;
          text-align: ${align};
          background-color: transparent;
          color: ${theme.palette.hue.black};
          font-size: ${theme.palette.fontSize.small};
          font-weight: ${theme.palette.fontWeight.medium};
          &::placeholder {
            color: ${colors.gray.gray200};
            font-weight: ${theme.palette.fontWeight.semiBold};
            transition: 200ms color;
          }
          &::-webkit-outer-spin-button,
          &::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }
          &[type='number'] {
            -moz-appearance: textfield;
          }
          &[type='password'] {
            letter-spacing: 0.25rem;
            &::placeholder {
              letter-spacing: initial;
            }
          }
          transition: 200ms color;
        }
        > .prefix,
        > .postfix {
          color: ${colors.gray.gray300};
          font-weight: ${theme.palette.fontWeight.medium};
          pointer-events: none;
          white-space: nowrap;
          &.postfix {
            margin-left: 8px;
          }
          &.prefix {
            margin-right: 8px;
          }
        }
      `,
      [type, theme, align, isActive]
    );

    return (
      <div
        css={inputRootStyle}
        className={cx(className, 'input')}
        data-testid={testId}
      >
        {prefix && <span className="prefix">{prefix}</span>}
        <label htmlFor={id}>
          <input
            id={id}
            ref={ref}
            type={type}
            disabled={disabled}
            onChange={handleChange}
            onFocus={e => {
              setIsActive(true);
              onFocus?.(e);
            }}
            onBlur={e => {
              setIsActive(false);
              onBlur?.(e);
            }}
            {...inputProps}
          />
        </label>
        {postfix && <span className="postfix">{postfix}</span>}
      </div>
    );
  }
);

export default Input;
