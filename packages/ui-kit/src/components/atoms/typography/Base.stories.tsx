import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from './Typography';

const { Base } = Typography;

const meta: Meta<typeof Base> = {
  title: 'Atoms/Typography/Base',
  component: Base,
};

export default meta;
type Story = StoryObj<typeof Base>;

export const Paragraph: Story = {
  args: {
    children: 'Это базовый абзац',
  },
};

export const Heading: Story = {
  args: {
    children: 'Заголовок H2',
    as: 'h2',
  },
};
