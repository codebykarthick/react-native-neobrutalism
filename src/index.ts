// Theme exports
export {
  NeobrutalismThemeProvider,
  NeobrutalismThemeContext,
  useNeobrutalismTheme,
  defaultTheme,
} from './theme';
export type {
  NeobrutalismTheme,
  NeobrutalismThemeOverride,
  NeobrutalismThemeContextValue,
  NeobrutalismColors,
  NeobrutalismShadow,
  NeobrutalismBorder,
  NeobrutalismSpacing,
  NeobrutalismButtonSize,
  NeobrutalismButtonSizes,
  NeobrutalismAnimation,
  DeepPartial,
} from './theme';

// Button exports
export { Button, useButtonAnimation } from './buttons';
export type {
  ButtonProps,
  ButtonVariant,
  ButtonSize,
  UseButtonAnimationOptions,
  UseButtonAnimationReturn,
} from './buttons';

// Utility exports
export { deepMerge } from './utils';
