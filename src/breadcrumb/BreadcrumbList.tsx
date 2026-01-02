import { useMemo } from 'react';
import type { JSX } from 'react';
import { View } from 'react-native';
import type { ViewStyle } from 'react-native';
import { useNeobrutalismTheme } from '../theme/useNeobrutalismTheme';
import { deepMerge } from '../utils/mergeStyles';
import { useBreadcrumbContext } from './BreadcrumbContext';
import type { BreadcrumbListProps } from './Breadcrumb.types';
import type { NeobrutalismTheme } from '../theme/types';

/**
 * Container component for breadcrumb items arranged in a horizontal row.
 *
 * @example
 * ```tsx
 * <BreadcrumbList>
 *   <BreadcrumbItem>...</BreadcrumbItem>
 *   <BreadcrumbSeparator />
 *   <BreadcrumbItem>...</BreadcrumbItem>
 * </BreadcrumbList>
 * ```
 */
export function BreadcrumbList({
  children,
  style,
}: BreadcrumbListProps): JSX.Element {
  const breadcrumbContext = useBreadcrumbContext();
  const { theme: contextTheme } = useNeobrutalismTheme();

  // Merge theme overrides from parent Breadcrumb
  const theme: NeobrutalismTheme = useMemo(
    () =>
      breadcrumbContext?.themeOverride
        ? deepMerge(contextTheme, breadcrumbContext.themeOverride)
        : contextTheme,
    [contextTheme, breadcrumbContext?.themeOverride]
  );

  // Container styles
  const containerStyle: ViewStyle = useMemo(
    () => ({
      flexDirection: 'row',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: theme.spacing.xs,
    }),
    [theme.spacing]
  );

  return <View style={[containerStyle, style]}>{children}</View>;
}
