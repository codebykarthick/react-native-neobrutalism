import type { JSX } from 'react';
import { View, StyleSheet } from 'react-native';
import type { AlertDialogHeaderProps } from './AlertDialog.types';

/**
 * Header section for AlertDialog containing title and description.
 *
 * @example
 * ```tsx
 * <AlertDialogHeader>
 *   <AlertDialogTitle>Are you sure?</AlertDialogTitle>
 *   <AlertDialogDescription>This action cannot be undone.</AlertDialogDescription>
 * </AlertDialogHeader>
 * ```
 */
export function AlertDialogHeader({
  children,
  style,
}: AlertDialogHeaderProps): JSX.Element {
  return <View style={[styles.header, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  header: {
    gap: 8,
  },
});
