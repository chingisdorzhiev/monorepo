import { FC } from 'react';

import { Favourite } from '~features/favourite-product';
import { ProductCard, type ProductUi } from '~entities/product';

import styles from './styles.module.css';

type Props = {
  products: ProductUi[];
};

export const ProductList: FC<Props> = ({ products }) => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Products</h2>

      <div className={styles.productsGrid}>
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            render={<Favourite product={product} />}
          />
        ))}
      </div>
    </section>
  );
};
