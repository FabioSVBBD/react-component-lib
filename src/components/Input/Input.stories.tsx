import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Input, InputProps } from './Input';

export default {
  title: 'Design System/Atoms/Input',
  component: Input,
  argTypes: {},
} as Meta<typeof Input>;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const First = Template.bind({});
First.args = {
  name: 'firstName',
  label: 'First names',
  focus: false,
};

export const Second = Template.bind({});
Second.args = {
  name: 'surname',
  label: 'Surname',
  value: 'hello again',
};

export const Third = Template.bind({});
Third.args = {
  name: 'firstName',
  label: 'First names',
  focus: true,
};
