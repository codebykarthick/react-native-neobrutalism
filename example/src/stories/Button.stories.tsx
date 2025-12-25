import type { Meta, StoryObj } from '@storybook/react';
import { View, Text } from 'react-native';

import { Button, NeobrutalismThemeProvider } from 'react-native-neobrutalism';

const meta: Meta<typeof Button> = {
  title: 'Buttons/Button',
  component: Button,
  decorators: [
    (Story) => (
      <NeobrutalismThemeProvider>
        <View style={{ padding: 20, gap: 16 }}>
          <Story />
        </View>
      </NeobrutalismThemeProvider>
    ),
  ],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'warning', 'danger', 'success', 'outlined'],
    },
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
    },
    disabled: {
      control: 'boolean',
    },
    fullWidth: {
      control: 'boolean',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

// Default
export const Default: Story = {
  args: {
    label: 'Button',
  },
};

// Variants
export const Primary: Story = {
  args: {
    label: 'Primary Button',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary Button',
    variant: 'secondary',
  },
};

export const Warning: Story = {
  args: {
    label: 'Warning Button',
    variant: 'warning',
  },
};

export const Danger: Story = {
  args: {
    label: 'Danger Button',
    variant: 'danger',
  },
};

export const Success: Story = {
  args: {
    label: 'Success Button',
    variant: 'success',
  },
};

export const Outlined: Story = {
  args: {
    label: 'Outlined Button',
    variant: 'outlined',
  },
};

// Sizes
export const Small: Story = {
  args: {
    label: 'Small',
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    label: 'Large',
    size: 'large',
  },
};

// States
export const Disabled: Story = {
  args: {
    label: 'Disabled',
    disabled: true,
  },
};

export const FullWidth: Story = {
  args: {
    label: 'Full Width Button',
    fullWidth: true,
  },
};

// All Variants
export const AllVariants: Story = {
  render: () => (
    <View style={{ gap: 12 }}>
      <Button label="Primary" variant="primary" />
      <Button label="Secondary" variant="secondary" />
      <Button label="Warning" variant="warning" />
      <Button label="Danger" variant="danger" />
      <Button label="Success" variant="success" />
      <Button label="Outlined" variant="outlined" />
    </View>
  ),
};

// All Sizes
export const AllSizes: Story = {
  render: () => (
    <View style={{ gap: 12, alignItems: 'flex-start' }}>
      <Button label="Small" size="small" />
      <Button label="Default" size="default" />
      <Button label="Large" size="large" />
    </View>
  ),
};

// With Icons
export const WithLeftIcon: Story = {
  args: {
    label: 'With Icon',
    leftIcon: <Text style={{ fontSize: 16 }}>+</Text>,
  },
};

export const WithRightIcon: Story = {
  args: {
    label: 'Next',
    rightIcon: <Text style={{ fontSize: 16 }}>→</Text>,
  },
};

// Custom Theme
export const CustomTheme: Story = {
  decorators: [
    (Story) => (
      <NeobrutalismThemeProvider
        theme={{
          shadow: { offsetX: 6, offsetY: 6, color: '#333333' },
          colors: { primary: '#FF6B6B', primaryForeground: '#FFFFFF' },
          border: { radius: 8 },
        }}
      >
        <View style={{ padding: 20 }}>
          <Story />
        </View>
      </NeobrutalismThemeProvider>
    ),
  ],
  args: {
    label: 'Custom Theme',
  },
};

// No Animation
export const NoAnimation: Story = {
  args: {
    label: 'No Animation',
    disableAnimation: true,
  },
};

// Interactive Demo
export const Interactive: Story = {
  args: {
    label: 'Press Me!',
    onPress: () => {
      console.log('Button pressed!');
    },
  },
};
