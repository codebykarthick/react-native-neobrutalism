import { createContext, useContext } from 'react';
import type { AlertContextValue } from './Alert.types';

/**
 * Context for Alert compound components
 */
export const AlertContext = createContext<AlertContextValue | undefined>(
  undefined
);

/**
 * Hook to access Alert context
 */
export function useAlertContext(): AlertContextValue {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error(
      'Alert compound components must be used within an <Alert> component'
    );
  }
  return context;
}
