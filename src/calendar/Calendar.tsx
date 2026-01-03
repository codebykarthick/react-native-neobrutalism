import { useState, useMemo, useCallback, useEffect } from 'react';
import type { JSX } from 'react';
import { View, StyleSheet, type ViewStyle } from 'react-native';
import { CalendarContext } from './CalendarContext';
import { CalendarHeader } from './CalendarHeader';
import { CalendarGrid } from './CalendarGrid';
import { useNeobrutalismTheme } from '../theme';
import { deepMerge } from '../utils';
import type { NeobrutalismTheme } from '../theme/types';
import type {
  CalendarProps,
  CalendarContextValue,
  DateRange,
} from './Calendar.types';

/**
 * Calendar component with neobrutalism styling
 *
 * Supports single date selection and date range selection modes,
 * with primary and neutral tone variants.
 *
 * @example
 * ```tsx
 * // Single date selection
 * const [date, setDate] = useState<Date>();
 * <Calendar mode="single" selected={date} onSelect={setDate} />
 *
 * // Date range selection
 * const [range, setRange] = useState<DateRange>({ from: undefined, to: undefined });
 * <Calendar mode="range" selectedRange={range} onSelectRange={setRange} />
 * ```
 */
export function Calendar({
  mode = 'single',
  tone = 'primary',
  selected,
  selectedRange,
  onSelect,
  onSelectRange,
  defaultMonth,
  minDate,
  maxDate,
  disabledDates = [],
  showOutsideDays = true,
  style,
  shadowStyle,
  headerStyle,
  headerTextStyle,
  dayCellStyle,
  dayTextStyle,
  themeOverride,
  accessibilityLabel = 'Calendar',
}: CalendarProps): JSX.Element {
  const { theme: contextTheme } = useNeobrutalismTheme();
  const theme: NeobrutalismTheme = useMemo(
    () =>
      themeOverride ? deepMerge(contextTheme, themeOverride) : contextTheme,
    [contextTheme, themeOverride]
  );

  // Internal state for current month being displayed
  const [currentMonth, setCurrentMonth] = useState<Date>(() => {
    if (defaultMonth)
      return new Date(defaultMonth.getFullYear(), defaultMonth.getMonth(), 1);
    if (selected)
      return new Date(selected.getFullYear(), selected.getMonth(), 1);
    if (selectedRange?.from) {
      return new Date(
        selectedRange.from.getFullYear(),
        selectedRange.from.getMonth(),
        1
      );
    }
    return new Date(new Date().getFullYear(), new Date().getMonth(), 1);
  });

  // Internal state for range selection in progress
  const [internalRange, setInternalRange] = useState<DateRange>({
    from: selectedRange?.from,
    to: selectedRange?.to,
  });

  // Update internal range when controlled range changes
  useEffect(() => {
    if (selectedRange) setInternalRange(selectedRange);
  }, [selectedRange]);

  const goToPreviousMonth = useCallback(() => {
    setCurrentMonth(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1)
    );
  }, []);

  const goToNextMonth = useCallback(() => {
    setCurrentMonth(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1)
    );
  }, []);

  const isDateDisabled = useCallback(
    (date: Date): boolean => {
      // Check min date
      if (minDate && date < minDate) return true;

      // Check max date
      if (maxDate && date > maxDate) return true;

      // Check disabled dates array
      return disabledDates.some((disabledDate) =>
        isSameDay(disabledDate, date)
      );
    },
    [minDate, maxDate, disabledDates]
  );

  const isDateSelected = useCallback(
    (date: Date): boolean => {
      if (mode === 'single' && selected) return isSameDay(selected, date);

      return false;
    },
    [mode, selected]
  );

  const isDateInRange = useCallback(
    (date: Date): boolean => {
      if (mode !== 'range') return false;

      const range = selectedRange || internalRange;
      if (!range.from || !range.to) return false;

      const time = date.getTime();
      const fromTime = range.from.getTime();
      const toTime = range.to.getTime();

      return time > fromTime && time < toTime;
    },
    [mode, selectedRange, internalRange]
  );

  const isRangeStart = useCallback(
    (date: Date): boolean => {
      if (mode !== 'range') return false;
      const range = selectedRange || internalRange;
      return range.from ? isSameDay(range.from, date) : false;
    },
    [mode, selectedRange, internalRange]
  );

  const isRangeEnd = useCallback(
    (date: Date): boolean => {
      if (mode !== 'range') return false;
      const range = selectedRange || internalRange;
      return range.to ? isSameDay(range.to, date) : false;
    },
    [mode, selectedRange, internalRange]
  );

  const handleDateSelect = useCallback(
    (date: Date) => {
      if (mode === 'single') {
        onSelect?.(date);
      } else {
        // Range mode
        const currentRange = selectedRange || internalRange;

        let newRange: DateRange;

        if (!currentRange.from || currentRange.to) {
          // Start new range
          newRange = { from: date, to: undefined };
        } else {
          // Complete range
          if (date < currentRange.from) {
            // Selected date is before start, swap them
            newRange = { from: date, to: currentRange.from };
          } else {
            newRange = { from: currentRange.from, to: date };
          }
        }

        setInternalRange(newRange);
        onSelectRange?.(newRange);
      }
    },
    [mode, selectedRange, internalRange, onSelect, onSelectRange]
  );

  const contextValue = useMemo<CalendarContextValue>(
    () => ({
      mode,
      tone,
      currentMonth,
      goToPreviousMonth,
      goToNextMonth,
      selectedDate: selected,
      selectedRange: selectedRange || internalRange,
      handleDateSelect,
      isDateDisabled,
      isDateSelected,
      isDateInRange,
      isRangeStart,
      isRangeEnd,
      showOutsideDays,
      themeOverride,
    }),
    [
      mode,
      tone,
      currentMonth,
      goToPreviousMonth,
      goToNextMonth,
      selected,
      selectedRange,
      internalRange,
      handleDateSelect,
      isDateDisabled,
      isDateSelected,
      isDateInRange,
      isRangeStart,
      isRangeEnd,
      showOutsideDays,
      themeOverride,
    ]
  );

  const containerStyle: ViewStyle = useMemo(
    () => ({
      backgroundColor: theme.colors.background,
      borderWidth: theme.border.width,
      borderColor: theme.border.color,
      borderRadius: theme.border.radius,
      padding: theme.spacing.md,
    }),
    [theme]
  );

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

  const showShadow = shadowStyle !== null;

  return (
    <View
      style={styles.wrapper}
      accessibilityRole="none"
      accessibilityLabel={accessibilityLabel}
    >
      {showShadow && <View style={[computedShadowStyle, shadowStyle]} />}
      <CalendarContext.Provider value={contextValue}>
        <View style={[containerStyle, style]}>
          <CalendarHeader style={headerStyle} textStyle={headerTextStyle} />
          <CalendarGrid
            dayCellStyle={dayCellStyle}
            dayTextStyle={dayTextStyle}
          />
        </View>
      </CalendarContext.Provider>
    </View>
  );
}

/**
 * Check if two dates are the same day
 */
function isSameDay(date1: Date, date2: Date): boolean {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    alignSelf: 'flex-start',
  },
});
