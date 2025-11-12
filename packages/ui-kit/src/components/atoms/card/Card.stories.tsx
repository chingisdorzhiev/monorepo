import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Atoms/Card',
  component: Card,
  args: {
    children: 'Пример карточки',
  },
  parameters: {
    docs: {
      description: {
        component: `
Базовый компонент **Card** — контейнер для визуальных блоков (например, товаров, категорий, пользователей и т.д.).

Поддерживает:
- разные **варианты** (\`default\`, \`outlined\`, \`elevated\`)
- опцию **clickable** для ховера и курсора
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    variant: 'default',
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
  },
};

export const Elevated: Story = {
  args: {
    variant: 'elevated',
  },
};

export const Clickable: Story = {
  args: {
    variant: 'default',
    clickable: true,
  },
};
