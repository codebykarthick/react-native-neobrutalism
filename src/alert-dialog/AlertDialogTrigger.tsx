import { cloneElement, isValidElement } from 'react';
import type { JSX, ReactElement } from 'react';
import { Pressable } from 'react-native';
import { useAlertDialogContext } from './AlertDialogContext';
import type { AlertDialogTriggerProps } from './AlertDialog.types';

/**
 * Trigger component that opens the AlertDialog when pressed.
 *
 * @example
 * ```tsx
 * // With wrapper Pressable (default)
 * <AlertDialogTrigger>
 *   <Text>Open Dialog</Text>
 * </AlertDialogTrigger>
 *
 * // With asChild - merges onPress into child (use with Button)
 * <AlertDialogTrigger asChild>
 *   <Button label="Open Dialog" />
 * </AlertDialogTrigger>
 * ```
 */
export function AlertDialogTrigger({
  children,
  asChild = false,
}: AlertDialogTriggerProps): JSX.Element {
  const { setOpen } = useAlertDialogContext();

  const handlePress = () => setOpen(true);

  // If asChild, clone the child and inject onPress
  if (asChild && isValidElement(children)) {
    return cloneElement(children as ReactElement<{ onPress?: () => void }>, {
      onPress: handlePress,
    });
  }

  return <Pressable onPress={handlePress}>{children}</Pressable>;
}
