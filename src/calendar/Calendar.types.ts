import type { ViewStyle, TextStyle } from 'react-native';
import type { NeobrutalismThemeOverride } from '../theme/types';

/**
 * Calendar selection mode
 */
export type CalendarMode = 'single' | 'range';

/**
 * Calendar tone variant
 */
export type CalendarTone = 'primary' | 'neutral';

/**
 * Date range selection
 */
export interface DateRange {
  /** Start date of the range */
  from: Date | undefined;
  /** End date of the range */
  to: Date | undefined;
}

/**
 * Calendar component props
 */
export interface CalendarProps {
  /** Selection mode - single date or date range */
  mode?: CalendarMode;

  /** Visual tone variant */
  tone?: CalendarTone;

  /** Selected date (for single mode) */
  selected?: Date;

  /** Selected date range (for range mode) */
  selectedRange?: DateRange;

  /** Callback when a date is selected (single mode) */
  onSelect?: (date: Date | undefined) => void;

  /** Callback when a date range is selected (range mode) */
  onSelectRange?: (range: DateRange) => void;

  /** Default month to display */
  defaultMonth?: Date;

  /** Minimum selectable date */
  minDate?: Date;

  /** Maximum selectable date */
  maxDate?: Date;

  /** Array of disabled dates */
  disabledDates?: Date[];

  /** Whether to show days from adjacent months */
  showOutsideDays?: boolean;

  /** Override container styles */
  style?: ViewStyle;

  /** Override shadow styles (null to disable shadow) */
  shadowStyle?: ViewStyle | null;

  /** Override header styles */
  headerStyle?: ViewStyle;

  /** Override header text styles */
  headerTextStyle?: TextStyle;

  /** Override day cell styles */
  dayCellStyle?: ViewStyle;

  /** Override day text styles */
  dayTextStyle?: TextStyle;

  /** Component-level theme overrides */
  themeOverride?: NeobrutalismThemeOverride;

  /** Accessibility label */
  accessibilityLabel?: string;
}

/**
 * Calendar context value for child components
 */
export interface CalendarContextValue {
  /** Current selection mode */
  mode: CalendarMode;

  /** Visual tone */
  tone: CalendarTone;

  /** Currently displayed month */
  currentMonth: Date;

  /** Navigate to previous month */
  goToPreviousMonth: () => void;

  /** Navigate to next month */
  goToNextMonth: () => void;

  /** Selected date (single mode) */
  selectedDate: Date | undefined;

  /** Selected range (range mode) */
  selectedRange: DateRange;

  /** Handle date selection */
  handleDateSelect: (date: Date) => void;

  /** Check if a date is disabled */
  isDateDisabled: (date: Date) => boolean;

  /** Check if a date is selected */
  isDateSelected: (date: Date) => boolean;

  /** Check if a date is in the selected range */
  isDateInRange: (date: Date) => boolean;

  /** Check if a date is the range start */
  isRangeStart: (date: Date) => boolean;

  /** Check if a date is the range end */
  isRangeEnd: (date: Date) => boolean;

  /** Whether to show outside days */
  showOutsideDays: boolean;

  /** Theme override for child components */
  themeOverride?: NeobrutalismThemeOverride;
}

/**
 * Calendar header props
 */
export interface CalendarHeaderProps {
  /** Override header container styles */
  style?: ViewStyle;

  /** Override header text styles */
  textStyle?: TextStyle;
}

/**
 * Calendar day cell props
 */
export interface CalendarDayProps {
  /** The date this cell represents */
  date: Date;

  /** Whether this day is from an adjacent month */
  isOutsideMonth?: boolean;

  /** Override cell styles */
  style?: ViewStyle;

  /** Override text styles */
  textStyle?: TextStyle;
}

/**
 * Calendar grid props
 */
export interface CalendarGridProps {
  /** Override grid container styles */
  style?: ViewStyle;

  /** Override day cell styles */
  dayCellStyle?: ViewStyle;

  /** Override day text styles */
  dayTextStyle?: TextStyle;
}
