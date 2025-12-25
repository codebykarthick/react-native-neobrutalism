import { createContext, useState, useCallback, useMemo } from 'react';
import type { ReactNode, JSX } from 'react';
import type {
  NeobrutalismTheme,
  NeobrutalismThemeContextValue,
  NeobrutalismThemeOverride,
} from './types';
import { defaultTheme } from './defaultTheme';
import { deepMerge } from '../utils/mergeStyles';

/**
 * Theme context - undefined when used outside provider
 */
export const NeobrutalismThemeContext = createContext<
  NeobrutalismThemeContextValue | undefined
>(undefined);

export interface NeobrutalismThemeProviderProps {
  /** Custom theme to merge with default */
  theme?: NeobrutalismThemeOverride;
  /** React children */
  children: ReactNode;
}

/**
 * Provider component for Neobrutalism theme context.
 * Wrap your app with this to enable theme customization.
 *
 * @example
 * ```tsx
 * <NeobrutalismThemeProvider theme={{ colors: { primary: '#FF0000' } }}>
 *   <App />
 * </NeobrutalismThemeProvider>
 * ```
 */
export function NeobrutalismThemeProvider({
  theme: initialTheme,
  children,
}: NeobrutalismThemeProviderProps): JSX.Element {
  // Merge initial theme override with defaults
  const [theme, setThemeState] = useState<NeobrutalismTheme>(() =>
    initialTheme ? deepMerge(defaultTheme, initialTheme) : defaultTheme
  );

  // Allow runtime theme updates
  const setTheme = useCallback((override: NeobrutalismThemeOverride): void => {
    setThemeState((current) => deepMerge(current, override));
  }, []);

  // Memoize context value to prevent unnecessary re-renders
  const contextValue = useMemo<NeobrutalismThemeContextValue>(
    () => ({ theme, setTheme }),
    [theme, setTheme]
  );

  return (
    <NeobrutalismThemeContext.Provider value={contextValue}>
      {children}
    </NeobrutalismThemeContext.Provider>
  );
}
