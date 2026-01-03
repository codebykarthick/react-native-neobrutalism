import { useMemo } from 'react';
import type { JSX } from 'react';
import { View } from 'react-native';
import type { ViewStyle } from 'react-native';
import { useNeobrutalismTheme } from '../theme/useNeobrutalismTheme';
import { deepMerge } from '../utils/mergeStyles';
import { useCardContext } from './CardContext';
import type { CardHeaderProps } from './Card.types';
import type { NeobrutalismTheme } from '../theme/types';

/**
 * Header component for Card.
 *
 * @example
 * ```tsx
 * <Card>
 *   <CardHeader>
 *     <CardTitle>Card Title</CardTitle>
 *     <CardDescription>Card Description</CardDescription>
 *   </CardHeader>
 * </Card>
 * ```
 */
export function CardHeader({ children, style }: CardHeaderProps): JSX.Element {
  const { themeOverride } = useCardContext();
  const { theme: contextTheme } = useNeobrutalismTheme();

  // Merge component-level overrides
  const theme: NeobrutalismTheme = useMemo(
    () =>
      themeOverride ? deepMerge(contextTheme, themeOverride) : contextTheme,
    [contextTheme, themeOverride]
  );

  const containerStyle: ViewStyle = useMemo(
    () => ({
      padding: theme.spacing.lg,
      paddingBottom: 0,
      gap: theme.spacing.xs,
    }),
    [theme.spacing]
  );

  return <View style={[containerStyle, style]}>{children}</View>;
}
