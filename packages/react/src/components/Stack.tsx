import * as React from 'react';
import { cn } from '../utils/cn';
import styles from './Stack.module.css';

export type StackDirection = 'horizontal' | 'vertical';
export type StackGap = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type StackAlign = 'start' | 'center' | 'end' | 'stretch' | 'baseline';
export type StackJustify = 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';

export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The HTML element to render */
  as?: keyof JSX.IntrinsicElements;
  /** Stack direction */
  direction?: StackDirection;
  /** Gap between items */
  gap?: StackGap;
  /** Align items */
  align?: StackAlign;
  /** Justify content */
  justify?: StackJustify;
  /** Whether items should wrap */
  wrap?: boolean;
}

export const Stack = React.forwardRef<HTMLDivElement, StackProps>(
  (
    {
      as: Component = 'div',
      direction = 'vertical',
      gap = 'md',
      align,
      justify,
      wrap = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    return React.createElement(
      Component,
      {
        ref,
        className: cn(
          styles.stack,
          styles[direction],
          styles[`gap${gap.charAt(0).toUpperCase()}${gap.slice(1)}`],
          align && styles[`align${align.charAt(0).toUpperCase()}${align.slice(1)}`],
          justify && styles[`justify${justify.charAt(0).toUpperCase()}${justify.slice(1)}`],
          wrap && styles.wrap,
          className
        ),
        ...props,
      },
      children
    );
  }
);

Stack.displayName = 'Stack';
