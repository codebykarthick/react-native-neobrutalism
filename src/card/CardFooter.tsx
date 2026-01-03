import { useMemo } from 'react';
import type { JSX } from 'react';
import { View } from 'react-native';
import type { ViewStyle } from 'react-native';
import { useNeobrutalismTheme } from '../theme/useNeobrutalismTheme';
import { deepMerge } from '../utils/mergeStyles';
import { useCardContext } from './CardContext';
import type { CardFooterProps } from './Card.types';
import type { NeobrutalismTheme } from '../theme/types';

/**
 * Footer component for Card.
 *
 * @example
 * ```tsx
 * <Card>
 *   <CardContent>
 *     <Text>Content</Text>
 *   </CardContent>
 *   <CardFooter>
 *     <Button label="Cancel" variant="secondary" />
 *     <Button label="Submit" />
 *   </CardFooter>
 * </Card>
 * ```
 */
export function CardFooter({ children, style }: CardFooterProps): JSX.Element {
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
      flexDirection: 'row',
      alignItems: 'center',
      padding: theme.spacing.lg,
      paddingTop: 0,
      gap: theme.spacing.sm,
    }),
    [theme.spacing]
  );

  return <View style={[containerStyle, style]}>{children}</View>;
}
