import { css } from '@emotion/react';
import { Story, Meta } from '@storybook/react';

import Heading, { HeadingProps } from '.';

export default {
  title: 'Components/Heading',
  component: Heading,
} as Meta;

export const Basic: Story<HeadingProps> = args => <Heading {...args} />;
Basic.args = {
  text: 'Heading',
  level: 'h1',
  color: 'primary',
};

export const Varient = () => (
  <>
    <Heading
      level="h1"
      text="Heading"
      css={css`
        margin-bottom: 10px;
      `}
    />
    <Heading level="h1" text="Heading" />
  </>
);
