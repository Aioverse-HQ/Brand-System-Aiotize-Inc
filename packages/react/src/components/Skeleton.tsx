import * as React from 'react';
import { cn } from '../utils/cn';
import styles from './Skeleton.module.css';

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Width of the skeleton */
  width?: string | number;
  /** Height of the skeleton */
  height?: string | number;
  /** Border radius variant */
  variant?: 'text' | 'circular' | 'rectangular' | 'rounded';
  /** Whether to animate */
  animate?: boolean;
}

export const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  (
    {
      width,
      height,
      variant = 'text',
      animate = true,
      className,
      style,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        aria-hidden="true"
        className={cn(
          styles.skeleton,
          styles[variant],
          animate && styles.animate,
          className
        )}
        style={{
          width: typeof width === 'number' ? `${width}px` : width,
          height: typeof height === 'number' ? `${height}px` : height,
          ...style,
        }}
        {...props}
      />
    );
  }
);

Skeleton.displayName = 'Skeleton';
