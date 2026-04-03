import * as React from 'react';
import { cn } from '../utils/cn';
import styles from './Spinner.module.css';

export type SpinnerSize = 'sm' | 'md' | 'lg' | 'xl';

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Size of the spinner */
  size?: SpinnerSize;
  /** Color of the spinner */
  color?: 'primary' | 'secondary' | 'white';
  /** Accessible label */
  label?: string;
}

export const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
  ({ size = 'md', color = 'primary', label = 'Loading', className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="status"
        aria-label={label}
        className={cn(styles.spinner, styles[size], styles[color], className)}
        {...props}
      >
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="31.4 31.4"
            className={styles.circle}
          />
        </svg>
        <span className={styles.srOnly}>{label}</span>
      </div>
    );
  }
);

Spinner.displayName = 'Spinner';
