import * as React from 'react';
import { cn } from '../utils/cn';
import styles from './Box.module.css';

export type BoxPadding = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The HTML element to render */
  as?: keyof JSX.IntrinsicElements;
  /** Padding size */
  padding?: BoxPadding;
  /** Padding on x-axis */
  paddingX?: BoxPadding;
  /** Padding on y-axis */
  paddingY?: BoxPadding;
  /** Background variant */
  background?: 'default' | 'muted' | 'foreground';
  /** Border */
  border?: boolean;
  /** Border radius */
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
  /** Box shadow */
  shadow?: 'none' | 'sm' | 'md' | 'lg';
}

export const Box = React.forwardRef<HTMLDivElement, BoxProps>(
  (
    {
      as: Component = 'div',
      padding,
      paddingX,
      paddingY,
      background,
      border = false,
      rounded,
      shadow,
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
          styles.box,
          padding && styles[`p${padding.charAt(0).toUpperCase()}${padding.slice(1)}`],
          paddingX && styles[`px${paddingX.charAt(0).toUpperCase()}${paddingX.slice(1)}`],
          paddingY && styles[`py${paddingY.charAt(0).toUpperCase()}${paddingY.slice(1)}`],
          background && styles[`bg${background.charAt(0).toUpperCase()}${background.slice(1)}`],
          border && styles.border,
          rounded && styles[`rounded${rounded.charAt(0).toUpperCase()}${rounded.slice(1)}`],
          shadow && styles[`shadow${shadow.charAt(0).toUpperCase()}${shadow.slice(1)}`],
          className
        ),
        ...props,
      },
      children
    );
  }
);

Box.displayName = 'Box';
