import { FC, useState } from 'react';
import styles from './styles.module.css';

/**
 * Галерея изображений продукта с выбранным основным изображением и превью.
 *
 * @example
 * <ProductImageGallery
 *   thumbnail="https://example.com/thumbnail.jpg"
 *   images={['https://example.com/1.jpg', 'https://example.com/2.jpg']}
 * />
 */

interface ProductImageGalleryProps {
  /** Основное изображение продукта (миниатюра) */
  thumbnail?: string;
  /** Массив изображений продукта */
  images: string[];
}

export const ProductImageGallery: FC<ProductImageGalleryProps> = ({ images, thumbnail }) => {
  const allImages = thumbnail ? [thumbnail, ...images.filter(img => img !== thumbnail)] : images;

  const [selected, setSelected] = useState(0);

  return (
    <div className={styles.gallery}>
      <img
        className={styles.mainImage}
        src={allImages[selected]}
        alt={`Product image ${selected + 1}`}
      />

      <div className={styles.thumbnails} role="list">
        {allImages.map((img, idx) => (
          <button
            key={idx}
            type="button"
            className={`${styles.thumbnail} ${idx === selected ? styles.selected : ''}`}
            onClick={() => setSelected(idx)}
            aria-selected={idx === selected}
            aria-label={`Select image ${idx + 1}`}
          >
            <img src={img} alt={`Thumbnail ${idx + 1}`} />
          </button>
        ))}
      </div>
    </div>
  );
};
