import type { JSX } from 'react';
import { Pressable } from 'react-native';
import { useAlertDialogContext } from './AlertDialogContext';
import type { AlertDialogTriggerProps } from './AlertDialog.types';

/**
 * Trigger component that opens the AlertDialog when pressed.
 *
 * @example
 * ```tsx
 * <AlertDialogTrigger>
 *   <Button label="Open Dialog" />
 * </AlertDialogTrigger>
 * ```
 */
export function AlertDialogTrigger({
  children,
}: AlertDialogTriggerProps): JSX.Element {
  const { setOpen } = useAlertDialogContext();

  return <Pressable onPress={() => setOpen(true)}>{children}</Pressable>;
}
