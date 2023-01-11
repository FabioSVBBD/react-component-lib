import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Button, ButtonProps } from './Button';

export default {
  title: 'Demo Library/Button',
  component: Button,
  argTypes: {},
} as Meta<typeof Button>;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const First = Template.bind({});
First.args = {
  children: 'Good morrow cousin!',
};

export const Second = Template.bind({});
Second.args = { children: 'Morning' };
