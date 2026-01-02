import type { ReactNode } from 'react';
import type { ViewStyle, TextStyle } from 'react-native';
import type { NeobrutalismThemeOverride } from '../theme/types';

/**
 * Root Breadcrumb props
 */
export interface BreadcrumbProps {
  /** Breadcrumb content (BreadcrumbList) */
  children: ReactNode;

  /** Override container styles */
  style?: ViewStyle;

  /** Component-level theme overrides */
  themeOverride?: NeobrutalismThemeOverride;

  /** Accessibility label for navigation */
  accessibilityLabel?: string;
}

/**
 * BreadcrumbList props - container for breadcrumb items
 */
export interface BreadcrumbListProps {
  /** BreadcrumbItems and BreadcrumbSeparators */
  children: ReactNode;

  /** Override container styles */
  style?: ViewStyle;
}

/**
 * BreadcrumbItem props - wrapper for individual breadcrumb entries
 */
export interface BreadcrumbItemProps {
  /** BreadcrumbLink or BreadcrumbPage */
  children: ReactNode;

  /** Override container styles */
  style?: ViewStyle;
}

/**
 * BreadcrumbLink props - clickable navigation link
 */
export interface BreadcrumbLinkProps {
  /** Link text or element */
  children: ReactNode;

  /** Press handler for navigation */
  onPress?: () => void;

  /** Disable the link */
  disabled?: boolean;

  /** Override container styles */
  style?: ViewStyle;

  /** Override text styles */
  textStyle?: TextStyle;
}

/**
 * BreadcrumbPage props - current page indicator (non-clickable)
 */
export interface BreadcrumbPageProps {
  /** Page text or element */
  children: ReactNode;

  /** Override container styles */
  style?: ViewStyle;

  /** Override text styles */
  textStyle?: TextStyle;
}

/**
 * BreadcrumbSeparator props - visual divider between items
 */
export interface BreadcrumbSeparatorProps {
  /** Custom separator content, defaults to chevron */
  children?: ReactNode;

  /** Override container styles */
  style?: ViewStyle;
}

/**
 * Context value for Breadcrumb styling
 */
export interface BreadcrumbContextValue {
  themeOverride?: NeobrutalismThemeOverride;
}
