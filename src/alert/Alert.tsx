import { useMemo } from 'react';
import type { JSX } from 'react';
import { View, StyleSheet } from 'react-native';
import type { ViewStyle } from 'react-native';
import { useNeobrutalismTheme } from '../theme/useNeobrutalismTheme';
import { deepMerge } from '../utils/mergeStyles';
import { AlertContext } from './AlertContext';
import type {
  AlertProps,
  AlertVariant,
  AlertContextValue,
} from './Alert.types';
import type { NeobrutalismTheme, NeobrutalismColors } from '../theme/types';

// Map variant to background color keys
const variantBackgroundMap: Record<AlertVariant, keyof NeobrutalismColors> = {
  default: 'background',
  destructive: 'danger',
};

/**
 * Neobrutalism styled alert component for displaying important messages.
 *
 * @example
 * ```tsx
 * <Alert variant="default">
 *   <AlertTitle>Heads up!</AlertTitle>
 *   <AlertDescription>You can add components using the CLI.</AlertDescription>
 * </Alert>
 *
 * <Alert variant="destructive" icon={<Icon name="error" />}>
 *   <AlertTitle>Error</AlertTitle>
 *   <AlertDescription>Something went wrong.</AlertDescription>
 * </Alert>
 * ```
 */
export function Alert({
  children,
  variant = 'default',
  icon,
  style,
  shadowStyle,
  themeOverride,
  accessibilityRole = 'alert',
  accessibilityLabel,
}: AlertProps): JSX.Element {
  // Get theme from context (or default)
  const { theme: contextTheme } = useNeobrutalismTheme();

  // Merge component-level overrides
  const theme: NeobrutalismTheme = useMemo(
    () =>
      themeOverride ? deepMerge(contextTheme, themeOverride) : contextTheme,
    [contextTheme, themeOverride]
  );

  const backgroundColor = theme.colors[variantBackgroundMap[variant]];

  // Container styles
  const containerStyle: ViewStyle = useMemo(
    () => ({
      backgroundColor,
      borderWidth: theme.border.width,
      borderColor: theme.border.color,
      borderRadius: theme.border.radius,
      paddingHorizontal: theme.spacing.md,
      paddingVertical: theme.spacing.sm,
      flexDirection: 'row',
      gap: theme.spacing.sm,
    }),
    [backgroundColor, theme.border, theme.spacing]
  );

  // Shadow styles (positioned behind alert)
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
  const contextValue = useMemo<AlertContextValue>(
    () => ({ variant, themeOverride }),
    [variant, themeOverride]
  );

  // Determine if shadow should be shown
  const showShadow = shadowStyle !== null;

  return (
    <View style={styles.wrapper}>
      {/* Shadow layer */}
      {showShadow && <View style={[computedShadowStyle, shadowStyle]} />}

      {/* Alert container */}
      <View
        style={[containerStyle, style]}
        accessibilityRole={accessibilityRole}
        accessibilityLabel={accessibilityLabel}
      >
        {/* Icon */}
        {icon != null && <View style={styles.iconContainer}>{icon}</View>}

        {/* Content */}
        <AlertContext.Provider value={contextValue}>
          <View style={styles.contentContainer}>{children}</View>
        </AlertContext.Provider>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
  },
  iconContainer: {
    paddingTop: 2,
  },
  contentContainer: {
    flex: 1,
    gap: 4,
  },
});
