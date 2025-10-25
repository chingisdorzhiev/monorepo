import { useInfiniteQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { Button, Typography } from '@packages/ui-kit';

import { productQueries, ProductCard, mapProductDtoToProductUi } from '~entities/product';
import { QueryBoundary } from '~shared/ui';

import styles from './styles.module.css';

const { Link } = Typography;

export const ProductsListPage = () => {
  const limit = 10;
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, error, isLoading } =
    useInfiniteQuery(productQueries.listInfinite(limit));
  const navigate = useNavigate();

  const products = data?.pages.flatMap(page => page.products.map(mapProductDtoToProductUi)) ?? [];

  return (
    <QueryBoundary isLoading={isLoading} error={error}>
      <Link onClick={() => navigate(-1)}>Back to Main Page</Link>

      <section className={styles.container}>
        <h2 className={styles.title}>Products</h2>

        <div className={styles.productsGrid}>
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
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
