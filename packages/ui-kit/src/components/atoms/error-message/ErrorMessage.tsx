import { FC, ReactNode } from 'react';

import { Typography } from '../typography/Typography';
import styles from './styles.module.css';

/**
 * Компонент отображения ошибок
 *
 * @example
 * <ErrorMessage text="Failed to load products" action={<Button>Retry</Button>} />
 */

interface ErrorMessageProps {
  /** Текст ошибки */
  text?: string;
  /** Действие (кнопка, ссылка) */
  action?: ReactNode;
}

const { Text } = Typography;

export const ErrorMessage: FC<ErrorMessageProps> = ({ text = 'Something went wrong', action }) => {
  return (
    <div className={styles.error} role="alert">
      <Text className={styles.text}>{text}</Text>
      {action && <div className={styles.action}>{action}</div>}
    </div>
  );
};
