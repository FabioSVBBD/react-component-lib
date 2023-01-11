import React from 'react';
import { DecoratorFn } from '@storybook/react';
import { themes } from '@storybook/theming';
import { ThemeProvider } from '../src/context/theme-context';
import '../src/tailwind.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const decorator: DecoratorFn = (Story, context) => {
  const dark = '#333333';
  const { backgrounds } = context.globals;

  return (
    <ThemeProvider theme={backgrounds?.value === dark ? 'dark' : 'light'}>
      <Story />
    </ThemeProvider>
  );
};

export const decorators = [decorator];
