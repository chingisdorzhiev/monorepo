import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Card } from '@packages/ui-kit';

import { LINK_PATHES } from '~shared/constants';

import type { CategoryDto } from '../api/types';

const { Text } = Typography;

interface CategoryCardProps {
  category: CategoryDto;
}

export const CategoryCard: FC<CategoryCardProps> = ({ category }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`${LINK_PATHES.CATEGORY}/${category.slug}`);
  };

  return (
    <Card clickable onClick={handleClick}>
      <Text>{category.name}</Text>
    </Card>
  );
};
