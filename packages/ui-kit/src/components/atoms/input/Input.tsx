import React, { FC } from 'react';
import { cn } from '../../../utils';
import { SpinnerSvg } from '../spinner/SpinnerSvg';

import styles from './styles.module.css';

/**
 * Базовый универсальный Input компонент.
 *
 * @example
 * <Input placeholder="Enter text..." />
 */

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  /** Показывать ли индикатор загрузки */
  loading?: boolean;
};

export const Input: FC<InputProps> = ({
  loading = false,
  disabled = false,
  className,
  ...props
}) => {
  const isDisabled = disabled || loading;

  return (
    <div className={styles.wrapper}>
      <input
        className={cn(styles.input, className)}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        aria-busy={loading}
        {...props}
      />

      {loading && (
        <div className={styles.spinner}>
          <SpinnerSvg size={16} aria-label="Loading" />
        </div>
      )}
    </div>
  );
};
