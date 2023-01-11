import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Badge, BadgeProps } from './Badge';

export default {
  title: 'Design System/Atoms/Badge',
  component: Badge,
  argTypes: {},
} as Meta<typeof Badge>;

const Template: Story<BadgeProps> = (args) => <Badge {...args} />;

export const Positive = Template.bind({});
Positive.args = {
  children: 'positive',
};

export const Warning = Template.bind({});
Warning.args = {
  children: 'warning',
  tier: 'warning',
};

export const Negative = Template.bind({});
Negative.args = {
  children: 'negative',
  tier: 'negative',
};

export const Neutral = Template.bind({});
Neutral.args = {
  children: 'neutral',
  tier: 'neutral',
};
