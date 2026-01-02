import type { JSX } from 'react';
import { View } from 'react-native';
import type { BreadcrumbItemProps } from './Breadcrumb.types';

/**
 * Wrapper component for individual breadcrumb entries.
 *
 * @example
 * ```tsx
 * <BreadcrumbItem>
 *   <BreadcrumbLink onPress={...}>Home</BreadcrumbLink>
 * </BreadcrumbItem>
 * ```
 */
export function BreadcrumbItem({
  children,
  style,
}: BreadcrumbItemProps): JSX.Element {
  return (
    <View style={[{ flexDirection: 'row', alignItems: 'center' }, style]}>
      {children}
    </View>
  );
}
