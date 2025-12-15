import React, { ReactNode } from 'react';
import { Typography, Card } from '@packages/ui-kit';
import { Link as RouterLink } from 'react-router-dom';

import { LINK_PATHES } from '~shared/constants';

import type { ProductUi } from '../model/types';

import styles from './styles.module.css';

const { Link } = Typography;

interface ProductCardProps {
  product: ProductUi;
  render?: ReactNode;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, render }) => {
  const { title, id, price } = product;

  return (
    <Card>
      <div className={styles.header}>
        <h3>{title}</h3>
        {render}
      </div>
      <p>Price: ${price}</p>
      <Link as={RouterLink} to={`${LINK_PATHES.PRODUCT}/${id}`}>
        Details
      </Link>
    </Card>
  );
};
