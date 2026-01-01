import { useCallback, useEffect } from 'react';
import {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  interpolate,
} from 'react-native-reanimated';
import type { UseAccordionAnimationOptions } from './Accordion.types';
import type { StyleProp, ViewStyle } from 'react-native';

const DEFAULT_DURATION = 300;

export type AccordionAnimationResult = {
  heightStyle: StyleProp<ViewStyle>;
  chevronStyle: StyleProp<ViewStyle>;
  setContentHeight: (height: number) => void;
};

/**
 * Animation hook for accordion expand/collapse using Reanimated.
 *
 * @example
 * ```tsx
 * const { heightStyle, chevronStyle, setContentHeight } = useAccordionAnimation({
 *   isExpanded,
 *   duration: 300,
 * });
 * ```
 */
export function useAccordionAnimation({
  isExpanded,
  duration = DEFAULT_DURATION,
}: UseAccordionAnimationOptions): AccordionAnimationResult {
  const progress = useSharedValue(isExpanded ? 1 : 0);
  const contentHeight = useSharedValue(0);

  // Animate on expansion change
  useEffect(() => {
    progress.value = withTiming(isExpanded ? 1 : 0, {
      duration,
      easing: Easing.bezier(0.4, 0, 0.2, 1),
    });
  }, [isExpanded, duration, progress]);

  // Animated content height style
  const heightStyle = useAnimatedStyle(() => {
    'worklet';
    return {
      height: interpolate(progress.value, [0, 1], [0, contentHeight.value]),
      overflow: 'hidden',
    };
  });

  // Animated chevron rotation style (180 degrees)
  const chevronStyle = useAnimatedStyle(() => {
    'worklet';
    return {
      transform: [
        {
          rotate: `${interpolate(progress.value, [0, 1], [0, 180])}deg`,
        },
      ],
    };
  });

  // Set the measured content height
  const setContentHeight = useCallback(
    (height: number) => {
      contentHeight.value = height;
    },
    [contentHeight]
  );

  return {
    heightStyle,
    chevronStyle,
    setContentHeight,
  };
}
