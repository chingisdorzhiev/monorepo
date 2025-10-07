import React, { FC } from 'react';
import { cn } from '../../../utils';

import styles from './styles.module.css';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
};

export const Button: FC<Props> = ({ children, variant = 'primary', ...props }) => {
  console.log('Button');

  return (
    <button className={cn(styles.button, styles[variant])} {...props}>
      {children}
    </button>
  );
};
