import React from 'react';
import { Typography } from '@packages/ui-kit';
import { Link as RouterLink } from 'react-router-dom';

import { shopPathes } from '~shared/constants';

import type { ProductUi } from '../model/types';

import styles from './styles.module.css';

const { Link } = Typography;

interface ProductCardProps {
  product: ProductUi;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { title, id, price } = product;

  return (
    <div className={styles.product}>
      <h3>{title}</h3>
      <p>Price: ${price}</p>
      <Link as={RouterLink} to={`${shopPathes.productById}/${id}`}>
        Details
      </Link>
    </div>
  );
};
