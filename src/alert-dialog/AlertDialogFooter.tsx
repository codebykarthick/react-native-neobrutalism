import type { JSX } from 'react';
import { View, StyleSheet } from 'react-native';
import type { AlertDialogFooterProps } from './AlertDialog.types';

/**
 * Footer section for AlertDialog containing action buttons.
 *
 * @example
 * ```tsx
 * <AlertDialogFooter>
 *   <AlertDialogCancel />
 *   <AlertDialogAction onPress={handleConfirm}>Confirm</AlertDialogAction>
 * </AlertDialogFooter>
 * ```
 */
export function AlertDialogFooter({
  children,
  style,
}: AlertDialogFooterProps): JSX.Element {
  return <View style={[styles.footer, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 12,
    marginTop: 8,
  },
});
