import type { ReactNode } from 'react';
import type { ViewStyle, TextStyle } from 'react-native';
import type { NeobrutalismThemeOverride } from '../theme/types';

/**
 * Accordion expansion mode
 */
export type AccordionType = 'single' | 'multiple';

/**
 * Root Accordion props
 */
export interface AccordionProps {
  /** Child AccordionItem components */
  children: ReactNode;

  /** Single item open at a time, or multiple */
  type?: AccordionType;

  /** Initially expanded item value(s) */
  defaultValue?: string | string[];

  /** Controlled expanded item value(s) */
  value?: string | string[];

  /** Callback when expanded items change */
  onValueChange?: (value: string | string[]) => void;

  /** Allow collapsing all items (single mode only) */
  collapsible?: boolean;

  /** Component-level theme overrides */
  themeOverride?: NeobrutalismThemeOverride;

  /** Container style */
  style?: ViewStyle;

  /** Accessibility label */
  accessibilityLabel?: string;
}

/**
 * Individual accordion item props
 */
export interface AccordionItemProps {
  /** Unique value to identify this item */
  value: string;

  /** AccordionTrigger and AccordionContent children */
  children: ReactNode;

  /** Disable this item */
  disabled?: boolean;

  /** Override container styles */
  style?: ViewStyle;
}

/**
 * Accordion trigger (header) props
 */
export interface AccordionTriggerProps {
  /** Trigger label or custom content */
  children: ReactNode;

  /** Custom icon on left side */
  leftIcon?: ReactNode;

  /** Custom chevron icon (replaces default) */
  chevronIcon?: ReactNode;

  /** Hide chevron entirely */
  hideChevron?: boolean;

  /** Override trigger container styles */
  style?: ViewStyle;

  /** Override text styles */
  textStyle?: TextStyle;

  /** Accessibility label */
  accessibilityLabel?: string;
}

/**
 * Accordion content props
 */
export interface AccordionContentProps {
  /** Content to display when expanded */
  children: ReactNode;

  /** Override content container styles */
  style?: ViewStyle;
}

/**
 * Context value for accordion state
 */
export interface AccordionContextValue {
  type: AccordionType;
  expandedItems: string[];
  collapsible: boolean;
  toggleItem: (itemValue: string) => void;
  themeOverride?: NeobrutalismThemeOverride;
}

/**
 * Context value for individual item
 */
export interface AccordionItemContextValue {
  value: string;
  isExpanded: boolean;
  disabled: boolean;
  toggle: () => void;
}

/**
 * Animation hook options
 */
export interface UseAccordionAnimationOptions {
  /** Whether the content is expanded */
  isExpanded: boolean;
  /** Animation duration in ms */
  duration?: number;
}

/**
 * Animation hook return value
 */
export interface UseAccordionAnimationReturn {
  /** Animated style for content container height */
  heightStyle: { height: number };
  /** Animated style for chevron rotation */
  chevronStyle: { transform: { rotate: string }[] };
  /** Set the measured content height */
  setContentHeight: (height: number) => void;
}
