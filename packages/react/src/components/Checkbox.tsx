import * as React from 'react';
import { cn } from '../utils/cn';
import styles from './Checkbox.module.css';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /** Label for the checkbox */
  label?: string;
  /** Description text */
  description?: string;
  /** Error state */
  error?: boolean;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, description, error = false, disabled, className, id, ...props }, ref) => {
    const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;

    return (
      <div className={cn(styles.wrapper, disabled && styles.disabled, className)}>
        <div className={styles.checkboxRow}>
          <input
            ref={ref}
            type="checkbox"
            id={checkboxId}
            disabled={disabled}
            aria-invalid={error}
            className={cn(styles.checkbox, error && styles.error)}
            {...props}
          />
          {label && (
            <label htmlFor={checkboxId} className={styles.label}>
              {label}
            </label>
          )}
        </div>
        {description && <span className={styles.description}>{description}</span>}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';
