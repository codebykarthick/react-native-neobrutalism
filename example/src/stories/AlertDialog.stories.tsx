import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { View, Text } from 'react-native';

import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
  AlertDialogCancel,
  Button,
  NeobrutalismThemeProvider,
} from 'react-native-neobrutalism';

const meta: Meta<typeof AlertDialog> = {
  title: 'Overlay/AlertDialog',
  component: AlertDialog,
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
    open: {
      control: 'boolean',
      description: 'Controlled open state',
    },
    defaultOpen: {
      control: 'boolean',
      description: 'Default open state (uncontrolled)',
    },
    onOpenChange: {
      action: 'onOpenChange',
      description: 'Callback when open state changes',
    },
  },
};

export default meta;

type Story = StoryObj<typeof AlertDialog>;

// Default
export const Default: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button label="Delete Account" variant="danger" />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onPress={() => console.log('Deleted!')}>
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
};

// Confirmation Dialog
export const ConfirmationDialog: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button label="Publish Changes" variant="primary" />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Publish Changes</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to publish these changes? They will be visible
            to all users immediately.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel />
          <AlertDialogAction>Publish</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
};

// Warning Dialog
export const WarningDialog: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button label="Reset Settings" variant="warning" />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
            <Text
              style={{
                fontSize: 24,
                fontFamily:
                  'Apple Color Emoji, Segoe UI Emoji, Noto Color Emoji, sans-serif',
              }}
            >
              ⚠️
            </Text>
            <AlertDialogTitle>Reset Settings</AlertDialogTitle>
          </View>
          <AlertDialogDescription>
            This will reset all your preferences to their default values. You
            will need to reconfigure your settings.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Keep Settings</AlertDialogCancel>
          <AlertDialogAction>Reset</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
};

// Logout Confirmation
export const LogoutConfirmation: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button label="Log Out" variant="secondary" />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Log Out</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to log out? You will need to sign in again to
            access your account.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Stay Logged In</AlertDialogCancel>
          <AlertDialogAction>Log Out</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
};

// Controlled State
export const ControlledState: Story = {
  render: function ControlledExample() {
    const [open, setOpen] = React.useState(false);
    return (
      <View style={{ gap: 16 }}>
        <Text style={{ fontSize: 16 }}>
          Dialog is: {open ? 'Open' : 'Closed'}
        </Text>
        <AlertDialog open={open} onOpenChange={setOpen}>
          <AlertDialogTrigger asChild>
            <Button label="Open Controlled Dialog" />
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Controlled Dialog</AlertDialogTitle>
              <AlertDialogDescription>
                This dialog state is controlled externally. The state is: {open ? 'open' : 'closed'}
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Close</AlertDialogCancel>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
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
        <View style={{ padding: 20 }}>
          <Story />
        </View>
      </NeobrutalismThemeProvider>
    ),
  ],
  render: () => (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button label="Custom Themed Dialog" />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Custom Theme</AlertDialogTitle>
          <AlertDialogDescription>
            This dialog uses custom theme settings for colors and styling.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Confirm</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  ),
};
