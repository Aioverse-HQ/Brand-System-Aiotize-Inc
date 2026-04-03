import * as React from 'react';
import { cn } from '../utils/cn';
import styles from './Text.module.css';

export type TextVariant =
  | 'heading-1'
  | 'heading-2'
  | 'heading-3'
  | 'heading-4'
  | 'heading-5'
  | 'heading-6'
  | 'body-lg'
  | 'body'
  | 'body-sm'
  | 'caption'
  | 'label';

export type TextColor = 'primary' | 'secondary' | 'muted' | 'brand' | 'success' | 'warning' | 'error' | 'info';

type TextElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div' | 'label';

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  /** The HTML element to render */
  as?: TextElement;
  /** Typography variant */
  variant?: TextVariant;
  /** Text color */
  color?: TextColor;
  /** Text alignment */
  align?: 'left' | 'center' | 'right';
  /** Whether to truncate with ellipsis */
  truncate?: boolean;
}

const variantToElement: Record<TextVariant, TextElement> = {
  'heading-1': 'h1',
  'heading-2': 'h2',
  'heading-3': 'h3',
  'heading-4': 'h4',
  'heading-5': 'h5',
  'heading-6': 'h6',
  'body-lg': 'p',
  body: 'p',
  'body-sm': 'p',
  caption: 'span',
  label: 'label',
};

export const Text = React.forwardRef<HTMLElement, TextProps>(
  (
    {
      as,
      variant = 'body',
      color = 'primary',
      align,
      truncate = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const Element = as || variantToElement[variant];

    return React.createElement(
      Element,
      {
        ref,
        className: cn(
          styles.text,
          styles[variant.replace('-', '')],
          styles[`color${color.charAt(0).toUpperCase()}${color.slice(1)}`],
          align && styles[`align${align.charAt(0).toUpperCase()}${align.slice(1)}`],
          truncate && styles.truncate,
          className
        ),
        ...props,
      },
      children
    );
  }
);

Text.displayName = 'Text';
