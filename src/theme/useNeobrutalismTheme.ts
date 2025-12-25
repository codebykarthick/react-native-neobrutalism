import { useContext } from 'react';
import { NeobrutalismThemeContext } from './NeobrutalismThemeProvider';
import type { NeobrutalismThemeContextValue } from './types';
import { defaultTheme } from './defaultTheme';

/**
 * Hook to access the Neobrutalism theme.
 * Can be used outside of ThemeProvider (returns default theme).
 *
 * @example
 * ```tsx
 * function MyComponent() {
 *   const { theme, setTheme } = useNeobrutalismTheme();
 *   return <View style={{ backgroundColor: theme.colors.primary }} />;
 * }
 * ```
 */
export function useNeobrutalismTheme(): NeobrutalismThemeContextValue {
  const context = useContext(NeobrutalismThemeContext);

  // If no provider, return default theme with no-op setTheme
  if (!context) {
    return {
      theme: defaultTheme,
      setTheme: (): void => {
        if (__DEV__) {
          console.warn(
            'useNeobrutalismTheme: setTheme called outside of NeobrutalismThemeProvider. ' +
              'Theme changes will not persist.'
          );
        }
      },
    };
  }

  return context;
}
