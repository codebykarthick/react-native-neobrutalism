import { createContext, useContext } from 'react';
import type { BreadcrumbContextValue } from './Breadcrumb.types';

/**
 * Context for sharing theme overrides with child components
 */
export const BreadcrumbContext = createContext<
  BreadcrumbContextValue | undefined
>(undefined);

/**
 * Hook to access Breadcrumb context
 * @returns The context value or undefined if not within a Breadcrumb
 */
export function useBreadcrumbContext(): BreadcrumbContextValue | undefined {
  return useContext(BreadcrumbContext);
}
