import { FC, HTMLAttributes, ReactNode } from 'react';
import { cn } from '../../../utils';

import styles from './styles.module.css';

type CardVariant = 'default' | 'outlined' | 'elevated';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** Содержимое карточки */
  children: ReactNode;
  /** Вариант оформления */
  variant?: CardVariant;
  /** Делает карточку кликабельной (hover + cursor) */
  clickable?: boolean;
}

export const Card: FC<CardProps> = ({
  children,
  className,
  variant = 'default',
  clickable = false,
  ...props
}) => {
  return (
    <div
      className={cn(styles.card, styles[variant], clickable && styles.clickable, className)}
      {...props}
    >
      {children}
    </div>
  );
};
