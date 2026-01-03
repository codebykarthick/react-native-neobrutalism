import { createContext, useContext } from 'react';
import type { CalendarContextValue } from './Calendar.types';

/**
 * Context for Calendar component state
 */
export const CalendarContext = createContext<CalendarContextValue | undefined>(
  undefined
);

/**
 * Hook to access Calendar context
 * @throws Error if used outside of Calendar component
 */
export function useCalendarContext(): CalendarContextValue {
  const context = useContext(CalendarContext);

  if (!context) {
    throw new Error(
      'useCalendarContext must be used within a <Calendar> component'
    );
  }

  return context;
}
