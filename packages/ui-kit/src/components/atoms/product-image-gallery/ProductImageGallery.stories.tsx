import type { Meta, StoryObj } from '@storybook/react';
import { ProductImageGallery } from './ProductImageGallery';

const meta: Meta<typeof ProductImageGallery> = {
  title: 'Atoms/ProductImageGallery',
  component: ProductImageGallery,
};

export default meta;
type Story = StoryObj<typeof ProductImageGallery>;

export const Default: Story = {
  args: {
    thumbnail: 'https://picsum.photos/id/237/150/150',
    images: ['https://picsum.photos/id/238/150/150', 'https://picsum.photos/id/239/150/150'],
  },
};
