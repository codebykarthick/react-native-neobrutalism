import { useState, useCallback, useMemo } from 'react';
import type { JSX } from 'react';
import { View, StyleSheet } from 'react-native';
import type { LayoutChangeEvent, ViewStyle } from 'react-native';
import Animated from 'react-native-reanimated';
import { useNeobrutalismTheme } from '../theme/useNeobrutalismTheme';
import { deepMerge } from '../utils/mergeStyles';
import {
  useAccordionContext,
  useAccordionItemContext,
} from './AccordionContext';
import { useAccordionAnimation } from './useAccordionAnimation';
import type { AccordionContentProps } from './Accordion.types';
import type { NeobrutalismTheme } from '../theme/types';

/**
 * Content component for accordion items with animated height.
 *
 * @example
 * ```tsx
 * <AccordionContent>
 *   <Text>This content will animate in and out</Text>
 * </AccordionContent>
 * ```
 */
export function AccordionContent({
  children,
  style,
}: AccordionContentProps): JSX.Element {
  const { themeOverride } = useAccordionContext();
  const { isExpanded } = useAccordionItemContext();
  const { theme: contextTheme } = useNeobrutalismTheme();
  const [measured, setMeasured] = useState(false);

  // Merge component-level overrides
  const theme: NeobrutalismTheme = useMemo(
    () =>
      themeOverride ? deepMerge(contextTheme, themeOverride) : contextTheme,
    [contextTheme, themeOverride]
  );

  // Get animated styles
  const animationResult = useAccordionAnimation({
    isExpanded,
    duration: 300,
  });

  const heightAnimatedStyle = animationResult.heightStyle;
  const setContentHeight = animationResult.setContentHeight;

  // Handle content measurement
  const handleLayout = useCallback(
    (event: LayoutChangeEvent) => {
      const { height } = event.nativeEvent.layout;
      if (height > 0) {
        setContentHeight(height);
        setMeasured(true);
      }
    },
    [setContentHeight]
  );

  // Content container styles
  const contentStyle: ViewStyle = useMemo(
    () => ({
      padding: theme.spacing.md,
      backgroundColor: theme.colors.background,
    }),
    [theme.spacing.md, theme.colors.background]
  );

  return (
    <Animated.View style={heightAnimatedStyle}>
      {/* Hidden measurement container */}
      {!measured && (
        <View
          style={styles.measureContainer}
          onLayout={handleLayout}
          pointerEvents="none"
        >
          <View style={[contentStyle, style]}>{children}</View>
        </View>
      )}

      {/* Visible content */}
      <View style={[contentStyle, style]}>{children}</View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  measureContainer: {
    position: 'absolute',
    opacity: 0,
    left: 0,
    right: 0,
  },
});
