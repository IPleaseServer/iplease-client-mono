import { css } from '@emotion/react';
import { Story, Meta } from '@storybook/react';

import Input, { InputProps } from '.';

export default {
  title: 'Components/Input',
  component: Input,
  decorators: [
    Str => (
      <div
        css={css`
          button + button {
            margin-left: 10px;
          }
        `}
      >
        <Str />
      </div>
    ),
  ],
} as Meta;

export const Basic: Story<InputProps> = args => <Input {...args} />;

export const Colors = () => <Input />;
