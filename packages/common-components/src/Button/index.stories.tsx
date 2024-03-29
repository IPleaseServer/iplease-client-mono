import { css } from '@emotion/react';
import { Story, Meta } from '@storybook/react';

import Button, { ButtonProps } from '.';

export default {
  title: 'Components/Button',
  component: Button,
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

export const Basic: Story<ButtonProps> = args => <Button {...args} />;
Basic.args = {
  text: '버튼',
};

export const Colors = () => (
  <>
    <Button color="primary" text="우선" />
    <Button color="default" text="기본" />
    <Button color="negative" text="부정" />
  </>
);
