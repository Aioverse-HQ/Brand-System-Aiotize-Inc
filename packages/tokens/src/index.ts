/**
 * Aiotize Design Tokens
 * Auto-generated TypeScript definitions
 */

// Import the generated JSON tokens
import tokensData from '../dist/tokens.json';

export const tokens = tokensData;

// Type-safe token accessors
export type ColorTokens = typeof tokens.color;
export type TypographyTokens = typeof tokens.typography;
export type SpacingTokens = typeof tokens.spacing;
export type ShadowTokens = typeof tokens.shadow;
export type BorderTokens = typeof tokens.border;
export type MotionTokens = typeof tokens.motion;
export type BreakpointTokens = typeof tokens.breakpoint;
export type ZIndexTokens = typeof tokens.zindex;

export interface DesignTokens {
  color: ColorTokens;
  typography: TypographyTokens;
  spacing: SpacingTokens;
  shadow: ShadowTokens;
  border: BorderTokens;
  motion: MotionTokens;
  breakpoint: BreakpointTokens;
  zindex: ZIndexTokens;
}

export default tokens;
