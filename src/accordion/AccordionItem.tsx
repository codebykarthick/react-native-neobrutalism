import { useMemo } from 'react';
import type { JSX } from 'react';
import { View, StyleSheet } from 'react-native';
import type { ViewStyle } from 'react-native';
import { useNeobrutalismTheme } from '../theme/useNeobrutalismTheme';
import { deepMerge } from '../utils/mergeStyles';
import { useAccordionContext, AccordionItemContext } from './AccordionContext';
import type {
  AccordionItemProps,
  AccordionItemContextValue,
} from './Accordion.types';
import type { NeobrutalismTheme } from '../theme/types';

/**
 * Individual item within an Accordion.
 *
 * @example
 * ```tsx
 * <AccordionItem value="item-1">
 *   <AccordionTrigger>Section Title</AccordionTrigger>
 *   <AccordionContent>Section content goes here</AccordionContent>
 * </AccordionItem>
 * ```
 */
export function AccordionItem({
  value,
  children,
  disabled = false,
  style,
}: AccordionItemProps): JSX.Element {
  const { expandedItems, toggleItem, themeOverride } = useAccordionContext();
  const { theme: contextTheme } = useNeobrutalismTheme();

  // Merge component-level overrides
  const theme: NeobrutalismTheme = useMemo(
    () =>
      themeOverride ? deepMerge(contextTheme, themeOverride) : contextTheme,
    [contextTheme, themeOverride]
  );

  const isExpanded = expandedItems.includes(value);

  const toggle = useMemo(() => {
    return () => {
      if (!disabled) toggleItem(value);
    };
  }, [disabled, toggleItem, value]);

  const itemContextValue = useMemo<AccordionItemContextValue>(
    () => ({
      value,
      isExpanded,
      disabled,
      toggle,
    }),
    [value, isExpanded, disabled, toggle]
  );

  // Container styles
  const containerStyle: ViewStyle = useMemo(
    () => ({
      borderWidth: theme.border.width,
      borderColor: theme.border.color,
      borderRadius: theme.border.radius,
      backgroundColor: theme.colors.background,
      marginBottom: theme.spacing.sm,
      overflow: 'hidden',
      opacity: disabled ? 0.5 : 1,
    }),
    [theme.border, theme.colors.background, theme.spacing.sm, disabled]
  );

  // Shadow styles
  const shadowStyle: ViewStyle = useMemo(
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

  return (
    <AccordionItemContext.Provider value={itemContextValue}>
      <View style={styles.wrapper}>
        {/* Shadow layer */}
        <View style={shadowStyle} />
        {/* Item container */}
        <View style={[containerStyle, style]}>{children}</View>
      </View>
    </AccordionItemContext.Provider>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
  },
});
