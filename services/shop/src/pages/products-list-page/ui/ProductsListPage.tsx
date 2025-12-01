import { useInfiniteQuery } from '@tanstack/react-query';
import { Link as RouterLink } from 'react-router-dom';
import { Button, Typography } from '@packages/ui-kit';

import { ProductList } from '~widgets/product-list';
import { productQueries, mapProductDtoToProductUi } from '~entities/product';
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

      <ProductList products={products} />

      {hasNextPage && (
        <div className={styles.loadMoreWrapper}>
          <Button onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
            {isFetchingNextPage ? 'Loading more...' : 'Load more'}
          </Button>
        </div>
      )}
    </QueryBoundary>
  );
};
