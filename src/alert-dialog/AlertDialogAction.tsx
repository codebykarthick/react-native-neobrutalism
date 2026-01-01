import { useCallback } from 'react';
import type { JSX } from 'react';
import { Button } from '../buttons/Button';
import { useAlertDialogContext } from './AlertDialogContext';
import type { AlertDialogActionProps } from './AlertDialog.types';

/**
 * Action button for AlertDialog that closes the dialog after press.
 *
 * @example
 * ```tsx
 * <AlertDialogAction onPress={handleDelete}>Delete</AlertDialogAction>
 * ```
 */
export function AlertDialogAction({
  children,
  onPress,
  leftIcon,
  style,
  textStyle,
}: AlertDialogActionProps): JSX.Element {
  const { setOpen, themeOverride } = useAlertDialogContext();

  const handlePress = useCallback(() => {
    onPress?.();
    setOpen(false);
  }, [onPress, setOpen]);

  return (
    <Button
      label={typeof children === 'string' ? children : ''}
      variant="primary"
      onPress={handlePress}
      leftIcon={leftIcon}
      style={style}
      textStyle={textStyle}
      themeOverride={themeOverride}
    />
  );
}
