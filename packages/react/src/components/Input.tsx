import * as React from 'react';
import { cn } from '../utils/cn';
import styles from './Input.module.css';

export type InputSize = 'sm' | 'md' | 'lg';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Size of the input */
  size?: InputSize;
  /** Error state */
  error?: boolean;
  /** Error message */
  errorMessage?: string;
  /** Left addon element */
  leftAddon?: React.ReactNode;
  /** Right addon element */
  rightAddon?: React.ReactNode;
  /** Full width */
  fullWidth?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      size = 'md',
      error = false,
      errorMessage,
      leftAddon,
      rightAddon,
      fullWidth = false,
      disabled,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <div className={cn(styles.wrapper, fullWidth && styles.fullWidth)}>
        <div
          className={cn(
            styles.inputContainer,
            styles[size],
            error && styles.error,
            disabled && styles.disabled
          )}
        >
          {leftAddon && <span className={styles.addon}>{leftAddon}</span>}
          <input
            ref={ref}
            disabled={disabled}
            aria-invalid={error}
            aria-describedby={errorMessage ? `${props.id}-error` : undefined}
            className={cn(styles.input, className)}
            {...props}
          />
          {rightAddon && <span className={styles.addon}>{rightAddon}</span>}
        </div>
        {errorMessage && (
          <span id={`${props.id}-error`} className={styles.errorMessage} role="alert">
            {errorMessage}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
