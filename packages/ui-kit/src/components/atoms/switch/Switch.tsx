import React, { FC, useState } from 'react';
import { cn } from '../../../utils';

import styles from './styles.module.css';

interface Props {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
}

export const Switch: FC<Props> = ({
  checked,
  defaultChecked = false,
  onChange,
  disabled = false,
}) => {
  const [internalChecked, setInternalChecked] = useState(defaultChecked);

  const isControled = checked !== undefined;
  const currentChecked = isControled ? checked : internalChecked;

  const handleClick = () => {
    if (disabled) return;

    const newChecked = !currentChecked;

    if (!isControled) {
      setInternalChecked(newChecked);
    }

    onChange?.(newChecked);
  };

  return (
    <div
      className={cn(styles.switch, currentChecked && styles.checked, disabled && styles.disabled)}
      onClick={handleClick}
      role="switch"
      aria-checked={checked}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      onKeyDown={e => {
        if ((e.key === 'Enter' || e.key === ' ') && !disabled) {
          handleClick();
        }
      }}
    >
      <div className={styles.thumb} />
    </div>
  );
};
