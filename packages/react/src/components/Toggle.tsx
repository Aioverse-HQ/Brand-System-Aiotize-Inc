import * as React from 'react';
import { cn } from '../utils/cn';
import styles from './Toggle.module.css';

export type ToggleSize = 'sm' | 'md' | 'lg';

export interface ToggleProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  /** Size of the toggle */
  size?: ToggleSize;
  /** Label for the toggle */
  label?: string;
}

export const Toggle = React.forwardRef<HTMLInputElement, ToggleProps>(
  ({ size = 'md', label, disabled, className, id, ...props }, ref) => {
    const reactId = React.useId();
    const toggleId = id || reactId;

    return (
      <div className={cn(styles.wrapper, disabled && styles.disabled, className)}>
        <input
          ref={ref}
          type="checkbox"
          role="switch"
          id={toggleId}
          disabled={disabled}
          className={styles.input}
          {...props}
        />
        <label htmlFor={toggleId} className={cn(styles.toggle, styles[size])}>
          <span className={styles.thumb} />
        </label>
        {label && (
          <label htmlFor={toggleId} className={styles.label}>
            {label}
          </label>
        )}
      </div>
    );
  }
);

Toggle.displayName = 'Toggle';
