import { FC } from 'react';
import { useSuspenseQuery } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { Typography } from '@packages/ui-kit';

import { ProductList } from '~widgets/product-list';
import { mapProductDtoToProductUi } from '~entities/product';
import { categoryQueries } from '~entities/category';

import { QueryBoundary } from '~shared/ui';

const { Link } = Typography;

export const ProductsByCategoryPage: FC = () => {
  const { category } = useParams<{ category: string }>();
  const { data } = useSuspenseQuery(categoryQueries.bySlug(category || ''));
  const navigate = useNavigate();

  const products = data?.products.map(mapProductDtoToProductUi) ?? [];

  return (
    <QueryBoundary suspense>
      <Link onClick={() => navigate(-1)}>Back to categories</Link>

      <ProductList products={products} />
    </QueryBoundary>
  );
};
