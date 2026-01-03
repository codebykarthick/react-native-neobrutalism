import type { Meta, StoryObj } from '@storybook/react';
import { View, Text, StyleSheet } from 'react-native';

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Button,
  Input,
  NeobrutalismThemeProvider,
} from 'react-native-neobrutalism';

const meta: Meta<typeof Card> = {
  title: 'Layout/Card',
  component: Card,
  decorators: [
    (Story) => (
      <NeobrutalismThemeProvider>
        <View style={{ padding: 20, maxWidth: 400 }}>
          <Story />
        </View>
      </NeobrutalismThemeProvider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Card>;

// Default
export const Default: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <Text>Card content goes here. You can put any content inside a card.</Text>
      </CardContent>
      <CardFooter>
        <Button label="Cancel" variant="secondary" size="small" />
        <Button label="Save" size="small" />
      </CardFooter>
    </Card>
  ),
};

// Simple
export const Simple: Story = {
  render: () => (
    <Card>
      <CardContent>
        <Text>A simple card with just content inside.</Text>
      </CardContent>
    </Card>
  ),
};

// With Header Only
export const WithHeader: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>You have 3 unread messages.</CardDescription>
      </CardHeader>
      <CardContent>
        <View style={{ gap: 8 }}>
          <Text>• New comment on your post</Text>
          <Text>• John started following you</Text>
          <Text>• Your order has shipped</Text>
        </View>
      </CardContent>
    </Card>
  ),
};

// With Footer Only
export const WithFooter: Story = {
  render: () => (
    <Card>
      <CardContent>
        <Text>Are you sure you want to delete this item?</Text>
      </CardContent>
      <CardFooter>
        <Button label="Cancel" variant="secondary" size="small" />
        <Button label="Delete" variant="danger" size="small" />
      </CardFooter>
    </Card>
  ),
};

// Login Form
export const LoginForm: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <View style={formStyles.container}>
          <View style={formStyles.field}>
            <Text style={formStyles.label}>Email</Text>
            <Input
              placeholder="m@example.com"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
          <View style={formStyles.field}>
            <Text style={formStyles.label}>Password</Text>
            <Input placeholder="Enter your password" secureTextEntry />
          </View>
        </View>
      </CardContent>
      <CardFooter>
        <Button label="Sign In" fullWidth />
      </CardFooter>
    </Card>
  ),
};

// Profile Card
export const ProfileCard: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
          <View style={profileStyles.avatar}>
            <Text style={profileStyles.avatarText}>JD</Text>
          </View>
          <View>
            <CardTitle>John Doe</CardTitle>
            <CardDescription>Software Developer</CardDescription>
          </View>
        </View>
      </CardHeader>
      <CardContent>
        <Text>Building beautiful apps with React Native and neobrutalism.</Text>
      </CardContent>
      <CardFooter>
        <Button label="Follow" size="small" />
        <Button label="Message" variant="secondary" size="small" />
      </CardFooter>
    </Card>
  ),
};

// Custom Theme
export const CustomTheme: Story = {
  decorators: [
    (Story) => (
      <NeobrutalismThemeProvider
        theme={{
          shadow: { offsetX: 6, offsetY: 6, color: '#333' },
          border: { radius: 12 },
        }}
      >
        <View style={{ padding: 20, maxWidth: 400 }}>
          <Story />
        </View>
      </NeobrutalismThemeProvider>
    ),
  ],
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Custom Styled Card</CardTitle>
        <CardDescription>
          This card uses custom theme settings for shadow and border radius.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Text>The shadow offset and border radius are customized.</Text>
      </CardContent>
    </Card>
  ),
};

// No Shadow
export const NoShadow: Story = {
  render: () => (
    <Card shadowStyle={null}>
      <CardHeader>
        <CardTitle>No Shadow Card</CardTitle>
        <CardDescription>This card has no shadow effect.</CardDescription>
      </CardHeader>
      <CardContent>
        <Text>Pass shadowStyle={'{null}'} to disable the shadow.</Text>
      </CardContent>
    </Card>
  ),
};

// Multiple Cards
export const MultipleCards: Story = {
  render: () => (
    <View style={{ gap: 16 }}>
      <Card>
        <CardHeader>
          <CardTitle>First Card</CardTitle>
        </CardHeader>
        <CardContent>
          <Text>Content for the first card.</Text>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Second Card</CardTitle>
        </CardHeader>
        <CardContent>
          <Text>Content for the second card.</Text>
        </CardContent>
      </Card>
    </View>
  ),
};

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

const profileStyles = StyleSheet.create({
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#88AAEE',
    borderWidth: 2,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    fontWeight: '600',
    fontSize: 16,
  },
});
