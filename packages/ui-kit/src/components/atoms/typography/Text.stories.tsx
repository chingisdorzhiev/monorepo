import type { Meta, StoryObj } from '@storybook/react';

import { Typography } from './Typography';

const { Text } = Typography;

const meta: Meta<typeof Text> = {
  title: 'Atoms/Typography/Text',
  component: Text,
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children: 'Простой текст',
  },
};

export const Bold: Story = {
  args: {
    children: 'Жирный текст',
    weight: 'bold',
  },
};

export const SecondaryColor: Story = {
  args: {
    children: 'Текст с второстепенным цветом',
    color: 'secondary',
  },
};
