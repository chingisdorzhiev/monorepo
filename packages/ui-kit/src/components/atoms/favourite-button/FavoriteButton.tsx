import { FC } from 'react';
import { cn } from '../../../utils';

import styles from './styles.module.css';

interface FavoriteButtonProps {
  /** Активно ли избранное */
  isActive?: boolean;
  /** Колбэк при клике */
  onToggle?: () => void;
  /** Показывать ли подпись рядом с иконкой */
  showLabel?: boolean;
  /** Внешний класс */
  className?: string;
}

export const FavoriteButton: FC<FavoriteButtonProps> = ({
  isActive = false,
  onToggle,
  showLabel = false,
  className,
}) => {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={cn(styles.button, isActive && styles.active, className)}
      aria-pressed={isActive}
    >
      <span className={styles.icon} role="img" aria-label="favorite">
        {isActive ? '💙' : '🤍'}
      </span>
      {showLabel && (
        <span className={styles.label}>{isActive ? 'В избранном' : 'В избранное'}</span>
      )}
    </button>
  );
};
