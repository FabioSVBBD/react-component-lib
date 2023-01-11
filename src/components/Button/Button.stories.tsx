import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Button, ButtonProps } from './Button';
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from '@storybook/addon-docs';

export default {
  title: 'Design System/Atoms/Button',
  component: Button,
  argTypes: {},
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>Simple Button</Subtitle>
          <Description>
            A button with different styling configs that takes events
          </Description>
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
          <Stories />
        </>
      ),
    },
  },
} as Meta<typeof Button>;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const PrimaryButton = Template.bind({});
PrimaryButton.storyName = 'Primary';
PrimaryButton.args = {
  children: 'Primary button',
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
