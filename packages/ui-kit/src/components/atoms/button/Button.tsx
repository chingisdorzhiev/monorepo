import React, { FC } from 'react';
import { cn } from '../../../utils';
import { SpinnerSvg } from '../spinner/SpinnerSvg';

import styles from './styles.module.css';

/**
 * Универсальная кнопка c состояниями primary и secondary
 *
 * @example
 * <Button variant="primary" onClick={() => alert('Clicked!')}>
 *   Click me
 * </Button>
 *
 * @example
 * <Button variant="secondary" disabled>
 *   Disabled button
 * </Button>
 *
 *  * @example
 * <Button loading>Save</Button>
 */

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  /** Вариант оформления кнопки */
  variant?: 'primary' | 'secondary' | 'link';
  /** Состояние загрузки */
  loading?: boolean;
  /** Кнопка неактивна */
  disabled?: boolean;
};

export const Button: FC<ButtonProps> = ({
  children,
  variant = 'primary',
  loading = false,
  disabled = false,
  ...props
}) => {
  const isDisabled = disabled || loading;

  return (
    <button
      type="button"
      className={cn(styles.button, styles[variant])}
      {...props}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      aria-busy={loading}
    >
      {/* {loading ? <SpinnerSvg size={16} aria-label="Loading" /> : children} */}
      {loading && (
        <span className={styles.spinnerWrapper}>
          <SpinnerSvg size={16} aria-label="Loading" />
        </span>
      )}

      <span className={cn(loading && styles.loadingText)}>{children}</span>
    </button>
  );
};
