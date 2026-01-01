import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { View, Text } from 'react-native';

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  NeobrutalismThemeProvider,
} from 'react-native-neobrutalism';

const meta: Meta<typeof Accordion> = {
  title: 'Data Display/Accordion',
  component: Accordion,
  decorators: [
    (Story) => (
      <NeobrutalismThemeProvider>
        <View style={{ padding: 20, maxWidth: 500 }}>
          <Story />
        </View>
      </NeobrutalismThemeProvider>
    ),
  ],
  argTypes: {
    type: {
      control: 'select',
      options: ['single', 'multiple'],
    },
    collapsible: {
      control: 'boolean',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Accordion>;

// Default
export const Default: Story = {
  render: () => (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          <Text>
            Yes. It comes with neobrutalism styling by default. Bold borders,
            offset shadows, and vibrant colors.
          </Text>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          <Text>
            Yes. It uses React Native Reanimated for smooth height animations
            and chevron rotation.
          </Text>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

// Single (Non-Collapsible)
export const SingleNonCollapsible: Story = {
  render: () => (
    <Accordion type="single" defaultValue="item-1">
      <AccordionItem value="item-1">
        <AccordionTrigger>First Section</AccordionTrigger>
        <AccordionContent>
          <Text>This accordion requires one section to always be open.</Text>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Second Section</AccordionTrigger>
        <AccordionContent>
          <Text>Click another section to switch. Cannot close all.</Text>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

// Multiple
export const Multiple: Story = {
  render: () => (
    <Accordion type="multiple">
      <AccordionItem value="item-1">
        <AccordionTrigger>Features</AccordionTrigger>
        <AccordionContent>
          <Text>
            • Cross-platform support{'\n'}
            • Smooth animations{'\n'}
            • Customizable themes
          </Text>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Installation</AccordionTrigger>
        <AccordionContent>
          <Text>npm install react-native-neobrutalism</Text>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Usage</AccordionTrigger>
        <AccordionContent>
          <Text>
            Import the components and wrap with NeobrutalismThemeProvider.
          </Text>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

// With Default Value
export const WithDefaultValue: Story = {
  render: () => (
    <Accordion type="single" collapsible defaultValue="item-2">
      <AccordionItem value="item-1">
        <AccordionTrigger>Section One</AccordionTrigger>
        <AccordionContent>
          <Text>Content for section one.</Text>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Section Two (Default Open)</AccordionTrigger>
        <AccordionContent>
          <Text>This section is open by default.</Text>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Section Three</AccordionTrigger>
        <AccordionContent>
          <Text>Content for section three.</Text>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

// With Icons
export const WithIcons: Story = {
  render: () => (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger leftIcon={<Text>📚</Text>}>
          Documentation
        </AccordionTrigger>
        <AccordionContent>
          <Text>Complete documentation is available on our website.</Text>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger leftIcon={<Text>⚙️</Text>}>Settings</AccordionTrigger>
        <AccordionContent>
          <Text>Configure your preferences and customizations here.</Text>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger leftIcon={<Text>🔒</Text>}>Security</AccordionTrigger>
        <AccordionContent>
          <Text>Manage your security settings and permissions.</Text>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

// Disabled Item
export const DisabledItem: Story = {
  render: () => (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Available Section</AccordionTrigger>
        <AccordionContent>
          <Text>This section is fully interactive.</Text>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" disabled>
        <AccordionTrigger>Disabled Section</AccordionTrigger>
        <AccordionContent>
          <Text>This content is not accessible.</Text>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Another Available Section</AccordionTrigger>
        <AccordionContent>
          <Text>This section is also interactive.</Text>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

// Controlled State
export const ControlledState: Story = {
  render: function ControlledExample() {
    const [value, setValue] = React.useState<string>('');
    return (
      <View style={{ gap: 16 }}>
        <Text style={{ fontSize: 16 }}>
          Currently open: {value || 'none'}
        </Text>
        <Accordion
          type="single"
          collapsible
          value={value}
          onValueChange={(v) => setValue(v as string)}
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>First</AccordionTrigger>
            <AccordionContent>
              <Text>First section content.</Text>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Second</AccordionTrigger>
            <AccordionContent>
              <Text>Second section content.</Text>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </View>
    );
  },
};

// Custom Theme
export const CustomTheme: Story = {
  decorators: [
    (Story) => (
      <NeobrutalismThemeProvider
        theme={{
          shadow: { offsetX: 6, offsetY: 6, color: '#333' },
          border: { radius: 12 },
          colors: { primary: '#FF6B6B', primaryForeground: '#FFFFFF' },
        }}
      >
        <View style={{ padding: 20, maxWidth: 500 }}>
          <Story />
        </View>
      </NeobrutalismThemeProvider>
    ),
  ],
  render: () => (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Custom Styled</AccordionTrigger>
        <AccordionContent>
          <Text>
            This accordion uses custom theme with different colors and shadow.
          </Text>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Another Section</AccordionTrigger>
        <AccordionContent>
          <Text>More content with the custom theme applied.</Text>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

// FAQ Example
export const FAQExample: Story = {
  render: () => (
    <View>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>
        Frequently Asked Questions
      </Text>
      <Accordion type="single" collapsible>
        <AccordionItem value="faq-1">
          <AccordionTrigger>What is Neobrutalism?</AccordionTrigger>
          <AccordionContent>
            <Text>
              Neobrutalism is a design style characterized by bold borders,
              offset shadows, high-contrast colors, and a raw, unpolished
              aesthetic.
            </Text>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-2">
          <AccordionTrigger>
            How do I customize the theme?
          </AccordionTrigger>
          <AccordionContent>
            <Text>
              Wrap your app with NeobrutalismThemeProvider and pass a theme prop
              to override default colors, shadows, borders, and more.
            </Text>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="faq-3">
          <AccordionTrigger>Is it compatible with Expo?</AccordionTrigger>
          <AccordionContent>
            <Text>
              Yes! The library works with both bare React Native and Expo
              projects. For animations, ensure you have react-native-reanimated
              configured.
            </Text>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </View>
  ),
};
