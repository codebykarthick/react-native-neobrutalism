import { useState, useCallback, useMemo } from 'react';
import type { JSX } from 'react';
import { AlertDialogContext } from './AlertDialogContext';
import type {
  AlertDialogProps,
  AlertDialogContextValue,
} from './AlertDialog.types';

/**
 * Neobrutalism styled alert dialog component for important confirmations.
 *
 * @example
 * ```tsx
 * <AlertDialog>
 *   <AlertDialogTrigger>
 *     <Button label="Delete" variant="danger" />
 *   </AlertDialogTrigger>
 *   <AlertDialogContent>
 *     <AlertDialogHeader>
 *       <AlertDialogTitle>Are you sure?</AlertDialogTitle>
 *       <AlertDialogDescription>This action cannot be undone.</AlertDialogDescription>
 *     </AlertDialogHeader>
 *     <AlertDialogFooter>
 *       <AlertDialogCancel />
 *       <AlertDialogAction onPress={handleDelete}>Delete</AlertDialogAction>
 *     </AlertDialogFooter>
 *   </AlertDialogContent>
 * </AlertDialog>
 * ```
 */
export function AlertDialog({
  children,
  open: controlledOpen,
  defaultOpen = false,
  onOpenChange,
  themeOverride,
}: AlertDialogProps): JSX.Element {
  const [internalOpen, setInternalOpen] = useState(defaultOpen);

  // Use controlled or uncontrolled state
  const open = controlledOpen !== undefined ? controlledOpen : internalOpen;

  const setOpen = useCallback(
    (newOpen: boolean) => {
      setInternalOpen(newOpen);
      onOpenChange?.(newOpen);
    },
    [onOpenChange]
  );

  const contextValue = useMemo<AlertDialogContextValue>(
    () => ({ open, setOpen, themeOverride }),
    [open, setOpen, themeOverride]
  );

  return (
    <AlertDialogContext.Provider value={contextValue}>
      {children}
    </AlertDialogContext.Provider>
  );
}
