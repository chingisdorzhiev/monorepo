import type { Preview } from '@storybook/react-webpack5';
import { Decorator } from '@storybook/react';

import '../../shared/src/styles/base.css';
import '../../shared/src/styles/theme.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  tags: ['autodocs'],
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        icon: 'circlehollow',
        items: ['light', 'dark'],
        showName: true,
      },
    },
  },
};

const withTheme: Decorator = (Story, context) => {
  const theme = context.globals.theme || 'light';
  document.documentElement.setAttribute('data-theme', theme);

  return <Story />;
};

export const decorators = [withTheme];

export default preview;
