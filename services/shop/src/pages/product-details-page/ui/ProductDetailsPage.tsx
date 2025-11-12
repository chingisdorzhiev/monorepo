import { FC, useEffect } from 'react';
import { useNavigate, useParams, Link as RouterLink } from 'react-router-dom';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { ProductImageGallery, RatingStars, Typography, Button } from '@packages/ui-kit';

import { productQueries } from '~entities/product';
import { QueryBoundary } from '~shared/ui';
import { PATHES } from '~shared/constants';

import styles from './styles.module.css';

const { Text, Title, Link } = Typography;

export const ProductDetailsPage: FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const id = Number(productId);
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { data: product, isLoading, error } = useQuery(productQueries.detail(id));

  // Prefetch соседних товаров
  useEffect(() => {
    const nextId = id + 1;
    const prevId = id - 1;

    if (nextId) {
      queryClient.prefetchQuery(productQueries.detail(nextId));
    }
    if (prevId > 0) {
      queryClient.prefetchQuery(productQueries.detail(prevId));
    }
  }, [id, queryClient]);

  const handleNavigate = (nextId: number) => navigate(`${PATHES.PRODUCT}/${nextId}`);

  return (
    <QueryBoundary isLoading={isLoading} error={error}>
      {product && (
        <div className={styles.container}>
          <Link as={RouterLink} to={PATHES.PRODUCTS}>
            Back to Products
          </Link>

          <div className={styles.navigation}>
            <Button disabled={id <= 1} onClick={() => handleNavigate(id - 1)} variant="secondary">
              ← Previous
            </Button>
            <Button onClick={() => handleNavigate(id + 1)} variant="primary">
              Next →
            </Button>
          </div>

          <div className={styles.topSection}>
            <ProductImageGallery images={product.images} thumbnail={product.thumbnail} />

            <div className={styles.details}>
              <Title>{product.title}</Title>
              <Text>{product.description}</Text>
              <RatingStars rating={product.rating} />
              <Text>
                <strong>Price:</strong> ${product.price} (-{product.discount}%)
              </Text>
              <Text>
                <strong>Stock:</strong> {product.stock} units
              </Text>
              <Text>
                <strong>Brand:</strong> {product.brand}
              </Text>
              <Text>
                <strong>Tags:</strong> {product.tags.join(', ')}
              </Text>
            </div>
          </div>

          <div className={styles.bottomSection}>
            <Title level={4}>{product.title}</Title>
            {product.reviews.map((r, idx) => (
              <div key={idx} className={styles.review}>
                <Text>
                  <strong>{r.reviewerName}</strong> ({new Date(r.date).toLocaleDateString()})
                </Text>
                <Text>Rating: {r.rating}</Text>
                <Text>{r.comment}</Text>
              </div>
            ))}
          </div>
        </div>
      )}
    </QueryBoundary>
  );
};
