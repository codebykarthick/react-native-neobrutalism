import type { ReactNode } from 'react';
import type { ViewStyle, TextStyle } from 'react-native';
import type { NeobrutalismThemeOverride } from '../theme/types';

/**
 * FileInput component props
 */
export interface FileInputProps {
  /** Placeholder text when no file is selected */
  placeholder?: string;

  /** Selected file name to display */
  value?: string;

  /** Called when the input is pressed */
  onPress?: () => void;

  /** Whether the input is disabled */
  disabled?: boolean;

  /** Whether the input is in an error state */
  error?: boolean;

  /** Full width mode */
  fullWidth?: boolean;

  /** Icon to display (typically a file/upload icon) */
  icon?: ReactNode;

  /** Override container styles */
  style?: ViewStyle;

  /** Override text styles */
  textStyle?: TextStyle;

  /** Component-level theme overrides */
  themeOverride?: NeobrutalismThemeOverride;

  /** Accessibility label */
  accessibilityLabel?: string;
}
