import type { ReactNode } from 'react';
import type { ViewStyle, TextStyle } from 'react-native';
import type { NeobrutalismThemeOverride } from '../theme/types';

/**
 * Alert variant types
 */
export type AlertVariant = 'default' | 'destructive';

/**
 * Root Alert props
 */
export interface AlertProps {
  /** Alert content (AlertTitle, AlertDescription, etc.) */
  children: ReactNode;

  /** Alert variant */
  variant?: AlertVariant;

  /** Custom icon on left side */
  icon?: ReactNode;

  /** Override container styles */
  style?: ViewStyle;

  /** Override shadow styles, pass null to hide shadow */
  shadowStyle?: ViewStyle | null;

  /** Component-level theme overrides */
  themeOverride?: NeobrutalismThemeOverride;

  /** Accessibility role */
  accessibilityRole?: 'alert' | 'none';

  /** Accessibility label */
  accessibilityLabel?: string;
}

/**
 * Alert title props
 */
export interface AlertTitleProps {
  /** Title text or element */
  children: ReactNode;

  /** Override text styles */
  style?: TextStyle;
}

/**
 * Alert description props
 */
export interface AlertDescriptionProps {
  /** Description text or element */
  children: ReactNode;

  /** Override text styles */
  style?: TextStyle;
}

/**
 * Context value for Alert styling
 */
export interface AlertContextValue {
  variant: AlertVariant;
  themeOverride?: NeobrutalismThemeOverride;
}
