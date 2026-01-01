import { useState, useCallback, useMemo } from 'react';
import type { JSX } from 'react';
import { View } from 'react-native';
import { AccordionContext } from './AccordionContext';
import type { AccordionProps, AccordionContextValue } from './Accordion.types';

/**
 * Neobrutalism styled accordion component with smooth animations.
 *
 * @example
 * ```tsx
 * <Accordion type="single" collapsible>
 *   <AccordionItem value="item-1">
 *     <AccordionTrigger>Section 1</AccordionTrigger>
 *     <AccordionContent>Content for section 1</AccordionContent>
 *   </AccordionItem>
 *   <AccordionItem value="item-2">
 *     <AccordionTrigger>Section 2</AccordionTrigger>
 *     <AccordionContent>Content for section 2</AccordionContent>
 *   </AccordionItem>
 * </Accordion>
 * ```
 */
export function Accordion({
  children,
  type = 'single',
  defaultValue,
  value: controlledValue,
  onValueChange,
  collapsible = false,
  themeOverride,
  style,
  accessibilityLabel,
}: AccordionProps): JSX.Element {
  // Initialize internal state from defaultValue
  const [internalValue, setInternalValue] = useState<string[]>(() => {
    if (defaultValue)
      return Array.isArray(defaultValue) ? defaultValue : [defaultValue];

    return [];
  });

  // Use controlled or uncontrolled state
  const expandedItems = useMemo(() => {
    if (controlledValue !== undefined) {
      return Array.isArray(controlledValue)
        ? controlledValue
        : [controlledValue];
    }

    return internalValue;
  }, [controlledValue, internalValue]);

  const toggleItem = useCallback(
    (itemValue: string) => {
      let newValue: string[];

      if (type === 'single') {
        // Single mode: only one item can be expanded
        if (expandedItems.includes(itemValue)) {
          // If collapsible, allow closing; otherwise keep open
          newValue = collapsible ? [] : [itemValue];
        } else {
          newValue = [itemValue];
        }
      } else {
        // Multiple mode: toggle the item
        if (expandedItems.includes(itemValue))
          newValue = expandedItems.filter((v) => v !== itemValue);
        else newValue = [...expandedItems, itemValue];
      }

      setInternalValue(newValue);

      // Call onValueChange with appropriate type
      if (onValueChange) {
        if (type === 'single') onValueChange(newValue[0] ?? '');
        else onValueChange(newValue);
      }
    },
    [type, expandedItems, collapsible, onValueChange]
  );

  const contextValue = useMemo<AccordionContextValue>(
    () => ({
      type,
      expandedItems,
      collapsible,
      toggleItem,
      themeOverride,
    }),
    [type, expandedItems, collapsible, toggleItem, themeOverride]
  );

  return (
    <AccordionContext.Provider value={contextValue}>
      <View style={style} accessibilityLabel={accessibilityLabel}>
        {children}
      </View>
    </AccordionContext.Provider>
  );
}
