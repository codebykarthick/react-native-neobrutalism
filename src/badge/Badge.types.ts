import type { ReactNode } from 'react';
import type { ViewStyle, TextStyle } from 'react-native';
import type { NeobrutalismThemeOverride } from '../theme/types';

/**
 * Badge variant types
 */
export type BadgeVariant =
  | 'primary'
  | 'secondary'
  | 'warning'
  | 'danger'
  | 'success'
  | 'neutral';

/**
 * Badge component props
 */
export interface BadgeProps {
  /** Badge content (text or elements) */
  children: ReactNode;

  /** Badge variant */
  variant?: BadgeVariant;

  /** Optional icon on left side */
  icon?: ReactNode;

  /** Override container styles */
  style?: ViewStyle;

  /** Override text styles */
  textStyle?: TextStyle;

  /** Override shadow styles, pass null to hide shadow */
  shadowStyle?: ViewStyle | null;

  /** Component-level theme overrides */
  themeOverride?: NeobrutalismThemeOverride;

  /** Accessibility label */
  accessibilityLabel?: string;
}
