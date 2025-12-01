import { useQuery } from '@tanstack/react-query';
import { Link as RouterLink } from 'react-router-dom';
import { Typography } from '@packages/ui-kit';

import { ProductList } from '~widgets/product-list';
import { SearchProducts, useSyncQueryParam, useSearchQuery } from '~features/search-products';
import { productQueries } from '~entities/product';
import { QueryBoundary } from '~shared/ui';
import { useDebouncedValue } from '~shared/lib';
import { PATHES } from '~shared/constants';

const { Link } = Typography;

export const SearchPage = () => {
  useSyncQueryParam();

  const rawQuery = useSearchQuery();
  const query = useDebouncedValue(rawQuery, 400);
  const { data, isLoading, error } = useQuery(productQueries.search(query));

  const products = data ?? [];

  return (
    <div style={{ padding: '20px' }}>
      <Link as={RouterLink} to={PATHES.ROOT}>
        Back to Main Page
      </Link>

      <h1>Search Results</h1>

      <SearchProducts />

      {query && (
        <p>
          Showing results for: <b>{query}</b>
        </p>
      )}

      <QueryBoundary isLoading={isLoading} error={error}>
        <ProductList products={products} />
      </QueryBoundary>
    </div>
  );
};
