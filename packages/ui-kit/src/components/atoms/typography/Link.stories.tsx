import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from './Typography';

const { Link } = Typography;

const meta: Meta<typeof Link> = {
  title: 'Atoms/Typography/Link',
  component: Link,
  parameters: {
    docs: {
      description: {
        component: `
Базовый компонент ссылки из Typography.

Поддерживает:
- HTML <a> по умолчанию
- любой элемент через prop **as**
- состояние **disabled**

Можно использовать с **react-router-dom**:
\`\`\`tsx
<Link as={RouterLink} to="/shop">Перейти в магазин</Link>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    as: {
      control: false,
      description: 'HTML-тег или React-компонент, например RouterLink',
    },
    disabled: {
      control: 'boolean',
      description: 'Неактивное состояние ссылки',
    },
    href: {
      control: 'text',
      description: 'Адрес ссылки (если используется <a>)',
    },
    children: {
      control: 'text',
      description: 'Текст или контент ссылки',
    },
  },
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
    rel: 'noopener noreferrer',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Неактивная ссылка',
    href: '#',
    disabled: true,
  },
};
