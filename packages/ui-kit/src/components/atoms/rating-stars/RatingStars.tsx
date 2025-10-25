import { FC } from 'react';
import styles from './styles.module.css';

/**
 * Отображение рейтинга продукта в виде звездочек.
 *
 * @example
 * <RatingStars rating={4.5} />
 */

interface Props {
  /** Значение рейтинга от 0 до 5 */
  rating: number;
  /** Размер текста/звёздок (по токенам) */
  size?: 'sm' | 'md' | 'lg';
}

export const RatingStars: FC<Props> = ({ rating, size = 'md' }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;

  return (
    <div
      className={styles.stars}
      style={{ fontSize: `var(--font-size-${size})` }}
      role="img"
      aria-label={`Rating: ${rating} out of 5`}
    >
      {'★'.repeat(fullStars)}
      {halfStar && '☆'}
      {'☆'.repeat(5 - fullStars - (halfStar ? 1 : 0))}
      <span className={styles.number}>{rating.toFixed(1)}</span>
    </div>
  );
};
