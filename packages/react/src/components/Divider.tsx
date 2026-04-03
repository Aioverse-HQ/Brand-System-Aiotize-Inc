import * as React from 'react';
import { cn } from '../utils/cn';
import styles from './Divider.module.css';

export type DividerOrientation = 'horizontal' | 'vertical';

export interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
  /** Orientation of the divider */
  orientation?: DividerOrientation;
}

export const Divider = React.forwardRef<HTMLHRElement, DividerProps>(
  ({ orientation = 'horizontal', className, ...props }, ref) => {
    return (
      <hr
        ref={ref}
        aria-orientation={orientation}
        className={cn(styles.divider, styles[orientation], className)}
        {...props}
      />
    );
  }
);

Divider.displayName = 'Divider';
