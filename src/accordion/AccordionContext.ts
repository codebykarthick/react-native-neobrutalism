import { createContext, useContext } from 'react';
import type {
  AccordionContextValue,
  AccordionItemContextValue,
} from './Accordion.types';

/**
 * Context for Accordion compound components
 */
export const AccordionContext = createContext<
  AccordionContextValue | undefined
>(undefined);

/**
 * Context for individual AccordionItem
 */
export const AccordionItemContext = createContext<
  AccordionItemContextValue | undefined
>(undefined);

/**
 * Hook to access Accordion context
 */
export function useAccordionContext(): AccordionContextValue {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error(
      'Accordion compound components must be used within an <Accordion> component'
    );
  }
  return context;
}

/**
 * Hook to access AccordionItem context
 */
export function useAccordionItemContext(): AccordionItemContextValue {
  const context = useContext(AccordionItemContext);
  if (!context) {
    throw new Error(
      'AccordionTrigger and AccordionContent must be used within an <AccordionItem> component'
    );
  }
  return context;
}
