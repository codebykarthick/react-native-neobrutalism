import type { ViewStyle, TextStyle, PressableProps } from 'react-native';
import type { ReactNode } from 'react';
import type { NeobrutalismThemeOverride } from '../theme/types';

/**
 * Available button style variants
 */
export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'warning'
  | 'danger'
  | 'success'
  | 'outlined';

/**
 * Available button sizes
 */
export type ButtonSize = 'small' | 'default' | 'large';

/**
 * Button component props
 */
export interface ButtonProps extends Omit<
  PressableProps,
  'style' | 'children'
> {
  /** Button text label */
  label: string;

  /** Button visual variant */
  variant?: ButtonVariant;

  /** Button size */
  size?: ButtonSize;

  /** Disable the button */
  disabled?: boolean;

  /** Full width button */
  fullWidth?: boolean;

  /** Custom icon to render before label */
  leftIcon?: ReactNode;

  /** Custom icon to render after label */
  rightIcon?: ReactNode;

  /** Override container styles */
  style?: ViewStyle;

  /** Override text styles */
  textStyle?: TextStyle;

  /** Override shadow styles (null to disable shadow) */
  shadowStyle?: ViewStyle | null;

  /** Component-level theme overrides */
  themeOverride?: NeobrutalismThemeOverride;

  /** Disable press animation */
  disableAnimation?: boolean;

  /** Press handler */
  onPress?: () => void;

  /** Accessibility label */
  accessibilityLabel?: string;
}
