import type { ReactNode } from 'react';
import type { ViewStyle, TextStyle, ModalProps } from 'react-native';
import type { NeobrutalismThemeOverride } from '../theme/types';

/**
 * Root AlertDialog props
 */
export interface AlertDialogProps {
  /** Child components */
  children: ReactNode;

  /** Controlled open state */
  open?: boolean;

  /** Default open state */
  defaultOpen?: boolean;

  /** Callback when open state changes */
  onOpenChange?: (open: boolean) => void;

  /** Component-level theme overrides */
  themeOverride?: NeobrutalismThemeOverride;
}

/**
 * AlertDialog trigger props
 */
export interface AlertDialogTriggerProps {
  /** Trigger element (usually a Button) */
  children: ReactNode;

  /** If true, merges onPress into child element instead of wrapping in Pressable */
  asChild?: boolean;
}

/**
 * AlertDialog content props
 */
export interface AlertDialogContentProps {
  /** Content children */
  children: ReactNode;

  /** Override content container styles */
  style?: ViewStyle;

  /** Override overlay styles */
  overlayStyle?: ViewStyle;

  /** Override shadow styles, pass null to hide shadow */
  shadowStyle?: ViewStyle | null;

  /** Modal animation type */
  animationType?: ModalProps['animationType'];

  /** Accessibility label */
  accessibilityLabel?: string;
}

/**
 * AlertDialog header props
 */
export interface AlertDialogHeaderProps {
  /** Header children (Title, Description, etc.) */
  children: ReactNode;

  /** Override styles */
  style?: ViewStyle;
}

/**
 * AlertDialog title props
 */
export interface AlertDialogTitleProps {
  /** Title text or element */
  children: ReactNode;

  /** Override text styles */
  style?: TextStyle;
}

/**
 * AlertDialog description props
 */
export interface AlertDialogDescriptionProps {
  /** Description text or element */
  children: ReactNode;

  /** Override text styles */
  style?: TextStyle;
}

/**
 * AlertDialog footer props
 */
export interface AlertDialogFooterProps {
  /** Footer children (Action, Cancel buttons) */
  children: ReactNode;

  /** Override styles */
  style?: ViewStyle;
}

/**
 * AlertDialog action button props
 */
export interface AlertDialogActionProps {
  /** Button label */
  children: ReactNode;

  /** Press handler - also closes dialog */
  onPress?: () => void;

  /** Custom icon */
  leftIcon?: ReactNode;

  /** Override button styles */
  style?: ViewStyle;

  /** Override text styles */
  textStyle?: TextStyle;
}

/**
 * AlertDialog cancel button props
 */
export interface AlertDialogCancelProps {
  /** Button label (default: "Cancel") */
  children?: ReactNode;

  /** Press handler - also closes dialog */
  onPress?: () => void;

  /** Override button styles */
  style?: ViewStyle;

  /** Override text styles */
  textStyle?: TextStyle;
}

/**
 * Context value for AlertDialog state
 */
export interface AlertDialogContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
  themeOverride?: NeobrutalismThemeOverride;
}
