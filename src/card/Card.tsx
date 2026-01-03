import { useMemo } from 'react';
import type { JSX } from 'react';
import { View, StyleSheet } from 'react-native';
import type { ViewStyle } from 'react-native';
import { useNeobrutalismTheme } from '../theme/useNeobrutalismTheme';
import { deepMerge } from '../utils/mergeStyles';
import { CardContext } from './CardContext';
import type { CardProps, CardContextValue } from './Card.types';
import type { NeobrutalismTheme } from '../theme/types';

/**
 * Neobrutalism styled card container component.
 *
 * @example
 * ```tsx
 * <Card>
 *   <CardHeader>
 *     <CardTitle>Card Title</CardTitle>
 *     <CardDescription>Card Description</CardDescription>
 *   </CardHeader>
 *   <CardContent>
 *     <Text>Content goes here</Text>
 *   </CardContent>
 *   <CardFooter>
 *     <Button label="Action" />
 *   </CardFooter>
 * </Card>
 * ```
 */
export function Card({
  children,
  style,
  shadowStyle,
  themeOverride,
  accessibilityLabel,
}: CardProps): JSX.Element {
  // Get theme from context (or default)
  const { theme: contextTheme } = useNeobrutalismTheme();

  // Merge component-level overrides
  const theme: NeobrutalismTheme = useMemo(
    () =>
      themeOverride ? deepMerge(contextTheme, themeOverride) : contextTheme,
    [contextTheme, themeOverride]
  );

  // Container styles
  const containerStyle: ViewStyle = useMemo(
    () => ({
      backgroundColor: theme.colors.background,
      borderWidth: theme.border.width,
      borderColor: theme.border.color,
      borderRadius: theme.border.radius,
      overflow: 'hidden',
    }),
    [theme.colors.background, theme.border]
  );

  // Shadow styles (positioned behind card)
  const computedShadowStyle: ViewStyle = useMemo(
    () => ({
      position: 'absolute',
      top: theme.shadow.offsetY,
      left: theme.shadow.offsetX,
      right: -theme.shadow.offsetX,
      bottom: -theme.shadow.offsetY,
      backgroundColor: theme.shadow.color,
      borderRadius: theme.border.radius,
    }),
    [theme.shadow, theme.border.radius]
  );

  // Context value for child components
  const contextValue = useMemo<CardContextValue>(
    () => ({ themeOverride }),
    [themeOverride]
  );

  // Determine if shadow should be shown
  const showShadow = shadowStyle !== null;

  return (
    <View style={styles.wrapper} accessibilityLabel={accessibilityLabel}>
      {/* Shadow layer */}
      {showShadow && <View style={[computedShadowStyle, shadowStyle]} />}

      {/* Card container */}
      <CardContext.Provider value={contextValue}>
        <View style={[containerStyle, style]}>{children}</View>
      </CardContext.Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
  },
});
