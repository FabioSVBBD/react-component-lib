import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Button, ButtonProps } from './Button';

export default {
  title: 'Demo Library/Button',
  component: Button,
  argTypes: {},
} as Meta<typeof Button>;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary button',
};

export const PrimaryExplicit = Template.bind({});
PrimaryExplicit.args = {
  children: 'Primary explicit button',
  tier: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Secondary button',
  tier: 'secondary',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  children: 'Tertiary button',
  tier: 'tertiary',
};

export const PrimaryDisabled = Template.bind({});
PrimaryDisabled.args = {
  children: 'Primary disabled button',
  tier: 'primary',
  disabled: true,
};

export const SecondaryDisabled = Template.bind({});
SecondaryDisabled.args = {
  children: 'Secondary disabled button',
  tier: 'secondary',
  disabled: true,
};

export const TertiaryDisabled = Template.bind({});
TertiaryDisabled.args = {
  children: 'Tertiary disabled button',
  tier: 'tertiary',
  disabled: true,
};
