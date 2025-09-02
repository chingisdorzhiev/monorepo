import React from 'react';
import { Link } from 'react-router-dom';
import { shopPathes } from '~/shared/constants';
import type { ProductUi } from '../model/types';

import styles from './styles.module.css';

interface ProductCardProps {
  product: ProductUi;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { title, id, price } = product;

  return (
    <div className={styles.product}>
      <h3>{title}</h3>
      <p>Price: ${price}</p>
      <Link to={shopPathes.productById(id)}>Details</Link>
    </div>
  );
};
