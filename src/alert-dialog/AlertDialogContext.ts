import { createContext, useContext } from 'react';
import type { AlertDialogContextValue } from './AlertDialog.types';

/**
 * Context for AlertDialog compound components
 */
export const AlertDialogContext = createContext<
  AlertDialogContextValue | undefined
>(undefined);

/**
 * Hook to access AlertDialog context
 */
export function useAlertDialogContext(): AlertDialogContextValue {
  const context = useContext(AlertDialogContext);
  if (!context) {
    throw new Error(
      'AlertDialog compound components must be used within an <AlertDialog> component'
    );
  }
  return context;
}
