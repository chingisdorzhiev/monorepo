import type { Meta, StoryObj } from '@storybook/react';
import { ErrorMessage } from './ErrorMessage';
import { Button } from '../button/Button';

const meta: Meta<typeof ErrorMessage> = {
  title: 'Atoms/ErrorMessage',
  component: ErrorMessage,
};

export default meta;
type Story = StoryObj<typeof ErrorMessage>;

export const Default: Story = {
  args: {
    text: 'Something went wrong',
  },
};

export const WithAction: Story = {
  args: {
    text: 'Failed to load products',
    action: <Button variant="primary">Retry</Button>,
  },
};
