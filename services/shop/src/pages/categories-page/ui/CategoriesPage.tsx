import { useSuspenseQuery } from '@tanstack/react-query';
import { Link as RouterLink } from 'react-router-dom';
import { Typography } from '@packages/ui-kit';

import { CategoryCard, categoryQueries } from '~entities/category';
import { QueryBoundary } from '~shared/ui';
import { LINK_PATHES } from '~shared/constants';

import styles from './styles.module.css';

const { Link } = Typography;

export const CategoriesPage = () => {
  const { data } = useSuspenseQuery(categoryQueries.all());

  return (
    <QueryBoundary suspense>
      <Link as={RouterLink} to={LINK_PATHES.HOME}>
        Back to Main Page
      </Link>

      <div className={styles.grid}>
        {data?.map(category => (
          <CategoryCard key={category.slug} category={category} />
        ))}
      </div>
    </QueryBoundary>
  );
};
