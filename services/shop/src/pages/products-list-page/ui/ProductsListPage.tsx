import { useInfiniteQuery } from '@tanstack/react-query';
import { Link as RouterLink } from 'react-router-dom';
import { Button, Typography } from '@packages/ui-kit';

import { Favourite } from '~features/favourite-product';
import { productQueries, ProductCard, mapProductDtoToProductUi } from '~entities/product';
import { QueryBoundary } from '~shared/ui';
import { PATHES } from '~shared/constants';

import styles from './styles.module.css';

const { Link } = Typography;

export const ProductsListPage = () => {
  const limit = 10;
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, error, isLoading } =
    useInfiniteQuery(productQueries.listInfinite(limit));
  const products = data?.pages.flatMap(page => page.products.map(mapProductDtoToProductUi)) ?? [];

  return (
    <QueryBoundary isLoading={isLoading} error={error}>
      <Link as={RouterLink} to={PATHES.ROOT}>
        Back to Main Page
      </Link>

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

        {hasNextPage && (
          <div className={styles.loadMoreWrapper}>
            <Button onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
              {isFetchingNextPage ? 'Loading more...' : 'Load more'}
            </Button>
          </div>
        )}
      </section>
    </QueryBoundary>
  );
};
