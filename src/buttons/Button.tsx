import type { JSX } from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import type { ViewStyle } from 'react-native';

export type ButtonProps = {
  label: string;
  onPress?: () => void;
  style?: ViewStyle;
};

export function Button({ label, onPress, style }: ButtonProps): JSX.Element {
  return (
    <Pressable onPress={onPress} style={[styles.button, style]}>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderWidth: 2,
    borderColor: '#000',
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
});
