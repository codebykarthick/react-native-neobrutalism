import type { ReactNode } from 'react';
import type { ViewStyle, TextStyle } from 'react-native';
import type { NeobrutalismThemeOverride } from '../theme/types';

/**
 * Root Card props
 */
export interface CardProps {
  /** Card content (CardHeader, CardContent, CardFooter, etc.) */
  children: ReactNode;

  /** Override container styles */
  style?: ViewStyle;

  /** Override shadow styles, pass null to hide shadow */
  shadowStyle?: ViewStyle | null;

  /** Component-level theme overrides */
  themeOverride?: NeobrutalismThemeOverride;

  /** Accessibility label */
  accessibilityLabel?: string;
}

/**
 * Card header props
 */
export interface CardHeaderProps {
  /** Header content (CardTitle, CardDescription, etc.) */
  children: ReactNode;

  /** Override container styles */
  style?: ViewStyle;
}

/**
 * Card title props
 */
export interface CardTitleProps {
  /** Title text or element */
  children: ReactNode;

  /** Override text styles */
  style?: TextStyle;
}

/**
 * Card description props
 */
export interface CardDescriptionProps {
  /** Description text or element */
  children: ReactNode;

  /** Override text styles */
  style?: TextStyle;
}

/**
 * Card content props
 */
export interface CardContentProps {
  /** Main content */
  children: ReactNode;

  /** Override container styles */
  style?: ViewStyle;
}

/**
 * Card footer props
 */
export interface CardFooterProps {
  /** Footer content (buttons, actions, etc.) */
  children: ReactNode;

  /** Override container styles */
  style?: ViewStyle;
}

/**
 * Context value for Card styling
 */
export interface CardContextValue {
  themeOverride?: NeobrutalismThemeOverride;
}
