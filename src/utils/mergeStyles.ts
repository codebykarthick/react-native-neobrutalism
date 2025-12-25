import type { DeepPartial } from '../theme/types';

/**
 * Deep merge two objects, with source values overriding target values.
 * Handles nested objects recursively.
 */
export function deepMerge<T extends object>(
  target: T,
  source: DeepPartial<T>
): T {
  const result = { ...target };

  for (const key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      const sourceValue = source[key];
      const targetValue = target[key];

      if (
        sourceValue !== undefined &&
        typeof sourceValue === 'object' &&
        sourceValue !== null &&
        !Array.isArray(sourceValue) &&
        typeof targetValue === 'object' &&
        targetValue !== null &&
        !Array.isArray(targetValue)
      ) {
        // Recursively merge nested objects
        (result as Record<string, unknown>)[key] = deepMerge(
          targetValue as object,
          sourceValue as DeepPartial<typeof targetValue>
        );
      } else if (sourceValue !== undefined) {
        // Direct assignment for primitives and arrays
        (result as Record<string, unknown>)[key] = sourceValue;
      }
    }
  }

  return result;
}
