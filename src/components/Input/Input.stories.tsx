import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Input, InputProps } from './Input';

export default {
  title: 'Demo Library/Input',
  component: Input,
  argTypes: {},
} as Meta<typeof Input>;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const First = Template.bind({});
First.args = {
  value: 'hello',
};

export const Second = Template.bind({});
Second.args = {
  value: 'hello again',
};
