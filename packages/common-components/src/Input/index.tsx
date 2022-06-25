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

import { useInputGroup } from '../InputGroupContext';

export interface InputProps {
  className?: string;
  type?: 'text' | 'number' | 'file' | 'password' | 'hidden';
  name?: string;
  placeholder?: string;
  prefix?: string;
  postfix?: string;
  value?: string | number;
  defaultValue?: string | number;
  disabled?: boolean;
  error?: boolean;
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
      error = false,
      onChange,
      testId,
      align = 'left',
      ...inputProps
    },
    ref
  ) => {
    const [id] = useState<string>(cuid());
    const theme = useTheme();

    const inputGroup = useInputGroup();
    const inputDisabled = useMemo(
      () => inputGroup?.disabled ?? disabled,
      [inputGroup, disabled]
    );

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
        border: ${inputGroup
          ? 'none'
          : `2px solid ${error ? colors.pink : colors.gray.gray200}`};
        border-radius: ${theme.palette.borderRadius};
        padding: 12px 17px;
        font-size: ${theme.palette.fontSize.medium};
        font-weight: ${theme.palette.fontWeight.medium};
        line-height: 18px;
        transition: 200ms border;
        background-color: ${theme.palette.hue.white};
        label {
          ${type === 'file' ? 'flex-shrink: 0;' : 'flex-grow: 1;'}
          ${inputDisabled && `color: ${colors.gray.gray200};`}
          color: ${theme.palette.hue.pink};
        }
        input {
          ${type === 'file' && 'display: none;'}
          width: 100%;
          outline: none;
          border: none;
          padding: 0;
          text-align: ${align};
          background-color: transparent;
          color: ${theme.palette.hue.black};
          &::placeholder {
            color: ${colors.gray.gray200};
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
          }
          transition: 200ms color;
        }
        > .prefix,
        > .postfix {
          color: ${colors.gray.gray300};
          font-weight: ${theme.palette.fontWeight.semiBold};
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
      [inputGroup, type, theme, inputDisabled, align, error]
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
            disabled={inputDisabled}
            onChange={handleChange}
            {...inputProps}
          />
        </label>
        {postfix && <span className="postfix">{postfix}</span>}
      </div>
    );
  }
);

export default Input;
