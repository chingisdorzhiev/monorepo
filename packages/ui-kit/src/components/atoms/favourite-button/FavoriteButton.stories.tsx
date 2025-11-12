import type { Meta, StoryObj } from '@storybook/react';
import { FavoriteButton } from './FavoriteButton';

const meta: Meta<typeof FavoriteButton> = {
  title: 'Atoms/FavoriteButton',
  component: FavoriteButton,
  args: {
    isActive: false,
  },
  parameters: {
    docs: {
      description: {
        component: `
Кнопка **Избранное** — атомарный компонент для переключения состояния избранного 💙  
Поддерживает:
- визуальное состояние (активное / неактивное)
- подпись через \`showLabel\`
- колбэк \`onToggle\`
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof FavoriteButton>;

export const Default: Story = {
  args: {
    isActive: false,
  },
};

export const Active: Story = {
  args: {
    isActive: true,
  },
};

export const WithLabel: Story = {
  args: {
    isActive: false,
    showLabel: true,
  },
};

export const ActiveWithLabel: Story = {
  args: {
    isActive: true,
    showLabel: true,
  },
};
