import type { TextInputProps, ViewStyle, TextStyle } from 'react-native';
import type { NeobrutalismThemeOverride } from '../theme/types';

/**
 * Input component props
 */
export interface InputProps extends Omit<TextInputProps, 'style'> {
  /** Override container styles */
  style?: ViewStyle;

  /** Override text input styles */
  inputStyle?: TextStyle;

  /** Component-level theme overrides */
  themeOverride?: NeobrutalismThemeOverride;

  /** Whether the input is in an error state */
  error?: boolean;

  /** Full width mode */
  fullWidth?: boolean;
}
