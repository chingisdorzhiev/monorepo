import React, { FC, ReactNode } from 'react';
import { useNavigate, To } from 'react-router-dom';
import { Button } from '@packages/ui-kit';

interface LinkButtonProps {
  children: ReactNode;
  to?: To; // внутренний маршрут
  href?: string; // внешняя ссылка
  disabled?: boolean;
  loading?: boolean;
}

export const LinkButton: FC<LinkButtonProps> = ({ children, to, href, disabled, loading }) => {
  const navigate = useNavigate();

  // Внешняя ссылка
  if (href) {
    return (
      <Button
        variant="link"
        disabled={disabled || loading}
        onClick={() => window.open(href, '_blank', 'noopener noreferrer')}
        loading={loading}
      >
        {children}
      </Button>
    );
  }

  // Внутренний маршрут
  if (to) {
    return (
      <Button
        variant="link"
        disabled={disabled || loading}
        onClick={() => navigate(to)}
        loading={loading}
      >
        {children}
      </Button>
    );
  }

  // Просто кнопка без навигации
  return (
    <Button variant="link" disabled={disabled || loading} loading={loading}>
      {children}
    </Button>
  );
};
