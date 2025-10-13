import type { Meta, StoryObj } from '@storybook/react';

import { Typography } from './Typography';

const { Title } = Typography;

const meta: Meta<typeof Title> = {
  title: 'Atoms/Typography/Title',
  component: Title,
};

export default meta;
type Story = StoryObj<typeof Title>;

export const H1: Story = {
  args: {
    children: 'Заголовок H1',
    level: 1,
  },
};

export const H2: Story = {
  args: {
    children: 'Заголовок H2',
    level: 2,
  },
};

export const H3: Story = {
  args: {
    children: 'Заголовок H3',
    level: 3,
  },
};

export const H4: Story = {
  args: {
    children: 'Заголовок H4',
    level: 4,
  },
};
