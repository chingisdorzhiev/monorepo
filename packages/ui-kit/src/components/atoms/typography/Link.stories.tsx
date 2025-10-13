import type { Meta, StoryObj } from '@storybook/react';

import { Typography } from './Typography';

const { Link } = Typography;

const meta: Meta<typeof Link> = {
  title: 'Atoms/Typography/Link',
  component: Link,
};

export default meta;
type Story = StoryObj<typeof Link>;

export const Default: Story = {
  args: {
    children: 'Обычная ссылка',
    href: '#',
  },
};

export const External: Story = {
  args: {
    children: 'Внешняя ссылка',
    href: 'https://example.com',
    target: '_blank',
  },
};

export const PrimaryColor: Story = {
  args: {
    children: 'Ссылка основного цвета',
    href: '#',
    color: 'primary',
  },
};
