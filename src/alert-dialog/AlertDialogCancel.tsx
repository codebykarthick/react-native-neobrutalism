import { useCallback } from 'react';
import type { JSX } from 'react';
import { Button } from '../buttons/Button';
import { useAlertDialogContext } from './AlertDialogContext';
import type { AlertDialogCancelProps } from './AlertDialog.types';

/**
 * Cancel button for AlertDialog that closes the dialog.
 *
 * @example
 * ```tsx
 * <AlertDialogCancel>Cancel</AlertDialogCancel>
 * // or with default label
 * <AlertDialogCancel />
 * ```
 */
export function AlertDialogCancel({
  children = 'Cancel',
  onPress,
  style,
  textStyle,
}: AlertDialogCancelProps): JSX.Element {
  const { setOpen, themeOverride } = useAlertDialogContext();

  const handlePress = useCallback(() => {
    onPress?.();
    setOpen(false);
  }, [onPress, setOpen]);

  return (
    <Button
      label={typeof children === 'string' ? children : 'Cancel'}
      variant="secondary"
      onPress={handlePress}
      style={style}
      textStyle={textStyle}
      themeOverride={themeOverride}
    />
  );
}
