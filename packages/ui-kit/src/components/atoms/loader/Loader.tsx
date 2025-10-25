import { FC } from 'react';
import { SpinnerSvg } from '../spinner/SpinnerSvg';
import styles from './styles.module.css';

/**
 * Компонент состояния загрузки
 *
 * Показывает спиннер и текст, может использоваться вместо "Loading..." в UI.
 *
 * @example
 * <Loader text="Loading products..." />
 */

interface LoaderProps {
  /** Текст под спиннером */
  text?: string;
}

export const Loader: FC<LoaderProps> = ({ text = 'Loading...' }) => {
  return (
    <div className={styles.loader} role="status" aria-live="polite">
      <SpinnerSvg aria-label="Loading" />
      <span className={styles.text}>{text}</span>
    </div>
  );
};
