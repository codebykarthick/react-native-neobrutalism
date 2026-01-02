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

// Utility exports
export { deepMerge } from './utils';
