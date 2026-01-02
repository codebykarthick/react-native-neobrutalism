import type { Meta, StoryObj } from '@storybook/react';
import { View, Text } from 'react-native';

import { Badge, NeobrutalismThemeProvider } from 'react-native-neobrutalism';

const meta: Meta<typeof Badge> = {
  title: 'Data Display/Badge',
  component: Badge,
  decorators: [
    (Story) => (
      <NeobrutalismThemeProvider>
        <View style={{ padding: 20, gap: 16 }}>
          <Story />
        </View>
      </NeobrutalismThemeProvider>
    ),
  ],
  args: {
    children: 'Badge',
    variant: 'primary',
  },
  argTypes: {
    children: {
      control: 'text',
      description: 'Badge content',
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'warning', 'danger', 'success', 'neutral'],
      description: 'Visual variant',
    },
    shadowStyle: {
      control: 'object',
      description: 'Shadow styles (set to null to hide)',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Badge>;

// Default
export const Default: Story = {
  args: {
    children: 'Badge',
  },
};

// Variants
export const Primary: Story = {
  args: {
    children: 'Primary',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary',
    variant: 'secondary',
  },
};

export const Warning: Story = {
  args: {
    children: 'Warning',
    variant: 'warning',
  },
};

export const Danger: Story = {
  args: {
    children: 'Danger',
    variant: 'danger',
  },
};

export const Success: Story = {
  args: {
    children: 'Success',
    variant: 'success',
  },
};

export const Neutral: Story = {
  args: {
    children: 'Neutral',
    variant: 'neutral',
  },
};

// All Variants
export const AllVariants: Story = {
  render: () => (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 12 }}>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="danger">Danger</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="neutral">Neutral</Badge>
    </View>
  ),
};

// With Icon
export const WithIcon: Story = {
  args: {
    children: 'New',
    variant: 'success',
    icon: <Text style={{ fontSize: 10 }}>✓</Text>,
  },
};

export const AllWithIcons: Story = {
  render: () => (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 12 }}>
      <Badge variant="primary" icon={<Text style={{ fontSize: 10 }}>★</Text>}>
        Featured
      </Badge>
      <Badge variant="success" icon={<Text style={{ fontSize: 10 }}>✓</Text>}>
        Verified
      </Badge>
      <Badge variant="danger" icon={<Text style={{ fontSize: 10 }}>✕</Text>}>
        Error
      </Badge>
      <Badge variant="warning" icon={<Text style={{ fontSize: 10 }}>⚠</Text>}>
        Warning
      </Badge>
    </View>
  ),
};

// Without Shadow
export const NoShadow: Story = {
  args: {
    children: 'No Shadow',
    shadowStyle: null,
  },
};

// Custom Theme
export const CustomTheme: Story = {
  decorators: [
    (Story) => (
      <NeobrutalismThemeProvider
        theme={{
          shadow: { offsetX: 3, offsetY: 3, color: '#333333' },
          colors: { primary: '#FF6B6B', primaryForeground: '#FFFFFF' },
          border: { radius: 12 },
        }}
      >
        <View style={{ padding: 20 }}>
          <Story />
        </View>
      </NeobrutalismThemeProvider>
    ),
  ],
  args: {
    children: 'Custom Theme',
  },
};

// Multiple Badges in Context
export const InContext: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
        <Text style={{ fontSize: 16, fontWeight: '600' }}>Product Name</Text>
        <Badge variant="success">In Stock</Badge>
        <Badge variant="primary">New</Badge>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
        <Text style={{ fontSize: 16, fontWeight: '600' }}>Another Item</Text>
        <Badge variant="danger">Sold Out</Badge>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
        <Text style={{ fontSize: 16, fontWeight: '600' }}>Limited Edition</Text>
        <Badge variant="warning">Low Stock</Badge>
        <Badge variant="secondary">Sale</Badge>
      </View>
    </View>
  ),
};
