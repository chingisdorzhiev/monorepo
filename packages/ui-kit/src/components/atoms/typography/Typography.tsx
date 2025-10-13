import React, { FC, ReactNode } from 'react';

import { cn } from '../../../utils';

import styles from './styles.module.css';

interface BaseProps {
  children: ReactNode;
  className?: string;
}

/**
 * Базовый компонент Typography
 */
const Base: FC<BaseProps & { as?: keyof React.JSX.IntrinsicElements }> = ({
  children,
  as,
  className = '',
}) => {
  const Component = as || 'p';
  return <Component className={className}>{children}</Component>;
};

/**
 * Заголовок
 */
interface TitleProps extends BaseProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

const Title: FC<TitleProps> = ({ children, level = 1, className }) => {
  const Tag = `h${level}` as keyof React.JSX.IntrinsicElements;
  return <Tag className={cn(styles[`h${level}`], className)}>{children}</Tag>;
};

/**
 * Обычный текст
 */
export type TextProps = BaseProps & {
  weight?: 'normal' | 'bold';
  color?: 'default' | 'primary' | 'secondary';
};

export const Text: FC<TextProps> = ({
  children,
  weight = 'normal',
  color = 'default',
  className = '',
  ...props
}) => {
  return (
    <Base {...props} className={cn(className, styles[weight], styles[color])}>
      {children}
    </Base>
  );
};
/**
 * Ссылка
 */
type LinkProps = BaseProps & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'children'>;

const Link: FC<LinkProps> = ({ children, className, ...props }) => {
  return (
    <a className={cn(styles.link, className)} {...props}>
      {children}
    </a>
  );
};

/**
 * Namespace Typography
 */
export const Typography = {
  Base,
  Title,
  Text,
  Link,
};
