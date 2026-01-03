import { useMemo } from 'react';
import type { JSX } from 'react';
import { View } from 'react-native';
import { BreadcrumbContext } from './BreadcrumbContext';
import type {
  BreadcrumbProps,
  BreadcrumbContextValue,
} from './Breadcrumb.types';

/**
 * Root Breadcrumb component that provides context for child components.
 *
 * @example
 * ```tsx
 * <Breadcrumb>
 *   <BreadcrumbList>
 *     <BreadcrumbItem>
 *       <BreadcrumbLink onPress={() => navigate('/')}>Home</BreadcrumbLink>
 *     </BreadcrumbItem>
 *     <BreadcrumbSeparator />
 *     <BreadcrumbItem>
 *       <BreadcrumbPage>Current Page</BreadcrumbPage>
 *     </BreadcrumbItem>
 *   </BreadcrumbList>
 * </Breadcrumb>
 * ```
 */
export function Breadcrumb({
  children,
  style,
  themeOverride,
  accessibilityLabel = 'Breadcrumb',
}: BreadcrumbProps): JSX.Element {
  // Context value for child components
  const contextValue = useMemo<BreadcrumbContextValue>(
    () => ({ themeOverride }),
    [themeOverride]
  );

  return (
    <BreadcrumbContext.Provider value={contextValue}>
      <View
        style={style}
        accessibilityRole="none"
        accessibilityLabel={accessibilityLabel}
      >
        {children}
      </View>
    </BreadcrumbContext.Provider>
  );
}
