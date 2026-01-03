// Theme exports
export {
  NeobrutalismThemeProvider,
  NeobrutalismThemeContext,
  useNeobrutalismTheme,
  defaultTheme,
} from './theme';
export type {
  NeobrutalismTheme,
  NeobrutalismThemeOverride,
  NeobrutalismThemeContextValue,
  NeobrutalismColors,
  NeobrutalismShadow,
  NeobrutalismBorder,
  NeobrutalismSpacing,
  NeobrutalismButtonSize,
  NeobrutalismButtonSizes,
  NeobrutalismAnimation,
  DeepPartial,
} from './theme';

// Button exports
export { Button, useButtonAnimation } from './buttons';
export type {
  ButtonProps,
  ButtonVariant,
  ButtonSize,
  UseButtonAnimationOptions,
  UseButtonAnimationReturn,
} from './buttons';

// Alert exports
export { Alert, AlertTitle, AlertDescription } from './alert';
export type {
  AlertProps,
  AlertTitleProps,
  AlertDescriptionProps,
  AlertVariant,
} from './alert';

// Alert Dialog exports
export {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
  AlertDialogCancel,
} from './alert-dialog';
export type {
  AlertDialogProps,
  AlertDialogTriggerProps,
  AlertDialogContentProps,
  AlertDialogHeaderProps,
  AlertDialogTitleProps,
  AlertDialogDescriptionProps,
  AlertDialogFooterProps,
  AlertDialogActionProps,
  AlertDialogCancelProps,
} from './alert-dialog';

// Accordion exports
export {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  useAccordionAnimation,
} from './accordion';
export type {
  AccordionProps,
  AccordionItemProps,
  AccordionTriggerProps,
  AccordionContentProps,
  AccordionType,
  UseAccordionAnimationOptions,
  UseAccordionAnimationReturn,
} from './accordion';

// Badge exports
export { Badge } from './badge';
export type { BadgeProps, BadgeVariant } from './badge';

// Breadcrumb exports
export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from './breadcrumb';
export type {
  BreadcrumbProps,
  BreadcrumbListProps,
  BreadcrumbItemProps,
  BreadcrumbLinkProps,
  BreadcrumbPageProps,
  BreadcrumbSeparatorProps,
} from './breadcrumb';

// Calendar exports
export {
  Calendar,
  CalendarHeader,
  CalendarDay,
  CalendarGrid,
  CalendarContext,
  useCalendarContext,
} from './calendar';
export type {
  CalendarProps,
  CalendarMode,
  CalendarTone,
  DateRange,
  CalendarContextValue,
  CalendarHeaderProps,
  CalendarDayProps,
  CalendarGridProps,
} from './calendar';

// Card exports
export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardContext,
  useCardContext,
} from './card';
export type {
  CardProps,
  CardHeaderProps,
  CardTitleProps,
  CardDescriptionProps,
  CardContentProps,
  CardFooterProps,
  CardContextValue,
} from './card';

// Input exports
export { Input, FileInput } from './input';
export type { InputProps, FileInputProps } from './input';

// Utility exports
export { deepMerge } from './utils';
