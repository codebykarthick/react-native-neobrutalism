import type { Meta, StoryObj } from '@storybook/react';
import { View, Text, StyleSheet } from 'react-native';

import { Input, Button, NeobrutalismThemeProvider } from 'react-native-neobrutalism';

const meta: Meta<typeof Input> = {
  title: 'Forms/Input',
  component: Input,
  decorators: [
    (Story) => (
      <NeobrutalismThemeProvider>
        <View style={{ padding: 20, gap: 16, maxWidth: 400 }}>
          <Story />
        </View>
      </NeobrutalismThemeProvider>
    ),
  ],
  argTypes: {
    placeholder: { control: 'text' },
    editable: { control: 'boolean' },
    error: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    secureTextEntry: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

// Default
export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
};

// Email Input
export const Email: Story = {
  args: {
    placeholder: 'm@example.com',
    keyboardType: 'email-address',
    autoCapitalize: 'none',
    autoComplete: 'email',
  },
};

// Password Input
export const Password: Story = {
  args: {
    placeholder: 'Enter your password',
    secureTextEntry: true,
    autoComplete: 'password',
  },
};

// Disabled
export const Disabled: Story = {
  args: {
    placeholder: 'Disabled input',
    editable: false,
  },
};

// Error State
export const Error: Story = {
  args: {
    placeholder: 'Invalid input',
    error: true,
    defaultValue: 'invalid@',
  },
};

// Full Width
export const FullWidth: Story = {
  args: {
    placeholder: 'Full width input',
    fullWidth: true,
  },
};

// With Label
export const WithLabel: Story = {
  render: () => (
    <View style={labelStyles.container}>
      <Text style={labelStyles.label}>Email</Text>
      <Input placeholder="m@example.com" keyboardType="email-address" />
    </View>
  ),
};

// With Error and Label
export const WithErrorAndLabel: Story = {
  render: () => (
    <View style={labelStyles.container}>
      <Text style={labelStyles.label}>Email</Text>
      <Input
        placeholder="m@example.com"
        keyboardType="email-address"
        error
        defaultValue="invalid-email"
      />
      <Text style={labelStyles.errorText}>Please enter a valid email address</Text>
    </View>
  ),
};

// Form Example
export const FormExample: Story = {
  render: () => (
    <View style={formStyles.container}>
      <View style={formStyles.field}>
        <Text style={formStyles.label}>Name</Text>
        <Input placeholder="John Doe" autoComplete="name" />
      </View>
      <View style={formStyles.field}>
        <Text style={formStyles.label}>Email</Text>
        <Input
          placeholder="john@example.com"
          keyboardType="email-address"
          autoComplete="email"
        />
      </View>
      <View style={formStyles.field}>
        <Text style={formStyles.label}>Password</Text>
        <Input
          placeholder="Create a password"
          secureTextEntry
          autoComplete="new-password"
        />
      </View>
      <Button label="Submit" fullWidth />
    </View>
  ),
};

// Subscription Form
export const SubscriptionForm: Story = {
  render: () => (
    <View style={subscriptionStyles.container}>
      <Input
        placeholder="Enter your email"
        keyboardType="email-address"
        style={subscriptionStyles.input}
      />
      <Button label="Subscribe" />
    </View>
  ),
};

// Multiple States
export const AllStates: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <View style={labelStyles.container}>
        <Text style={labelStyles.label}>Default</Text>
        <Input placeholder="Default input" />
      </View>
      <View style={labelStyles.container}>
        <Text style={labelStyles.label}>Focused (tap to focus)</Text>
        <Input placeholder="Tap to see focus state" />
      </View>
      <View style={labelStyles.container}>
        <Text style={labelStyles.label}>Error</Text>
        <Input placeholder="Error input" error defaultValue="Invalid value" />
      </View>
      <View style={labelStyles.container}>
        <Text style={labelStyles.label}>Disabled</Text>
        <Input placeholder="Disabled input" editable={false} />
      </View>
    </View>
  ),
};

// Custom Theme
export const CustomTheme: Story = {
  decorators: [
    (Story) => (
      <NeobrutalismThemeProvider
        theme={{
          border: { radius: 12 },
          colors: { primary: '#FF6B6B' },
        }}
      >
        <View style={{ padding: 20, maxWidth: 400 }}>
          <Story />
        </View>
      </NeobrutalismThemeProvider>
    ),
  ],
  args: {
    placeholder: 'Custom styled input',
  },
};

const labelStyles = StyleSheet.create({
  container: {
    gap: 4,
  },
  label: {
    fontWeight: '500',
    fontSize: 14,
  },
  errorText: {
    fontSize: 12,
    color: '#FF6B6B',
  },
});

const formStyles = StyleSheet.create({
  container: {
    gap: 16,
  },
  field: {
    gap: 4,
  },
  label: {
    fontWeight: '500',
    fontSize: 14,
  },
});

const subscriptionStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 8,
  },
  input: {
    flex: 1,
  },
});
