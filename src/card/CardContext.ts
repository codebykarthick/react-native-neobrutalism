import { createContext, useContext } from 'react';
import type { CardContextValue } from './Card.types';

/**
 * Context for Card compound components
 */
export const CardContext = createContext<CardContextValue | undefined>(
  undefined
);

/**
 * Hook to access Card context
 */
export function useCardContext(): CardContextValue {
  const context = useContext(CardContext);
  if (!context) {
    throw new Error(
      'Card compound components must be used within a <Card> component'
    );
  }
  return context;
}
