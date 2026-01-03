import { useMemo } from 'react';
import type { JSX } from 'react';
import { View } from 'react-native';
import type { ViewStyle } from 'react-native';
import { useNeobrutalismTheme } from '../theme/useNeobrutalismTheme';
import { deepMerge } from '../utils/mergeStyles';
import { useCardContext } from './CardContext';
import type { CardContentProps } from './Card.types';
import type { NeobrutalismTheme } from '../theme/types';

/**
 * Content component for Card.
 *
 * @example
 * ```tsx
 * <Card>
 *   <CardContent>
 *     <Text>Your content here</Text>
 *   </CardContent>
 * </Card>
 * ```
 */
export function CardContent({
  children,
  style,
}: CardContentProps): JSX.Element {
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
    }),
    [theme.spacing]
  );

  return <View style={[containerStyle, style]}>{children}</View>;
}
