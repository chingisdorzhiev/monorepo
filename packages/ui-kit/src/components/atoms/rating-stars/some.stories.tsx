import type { Meta, StoryObj } from '@storybook/react';
import { RatingStars } from './RatingStars';

const meta: Meta<typeof RatingStars> = {
  title: 'Atoms/RatingStars',
  component: RatingStars,
};

export default meta;
type Story = StoryObj<typeof RatingStars>;

export const Default: Story = {
  args: {
    rating: 4.5,
  },
};

export const ZeroStars: Story = {
  args: {
    rating: 0,
  },
};

export const FullStars: Story = {
  args: {
    rating: 5,
  },
};
