import type { Meta, StoryObj } from '@storybook/react';
import { View, Text } from 'react-native';

import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  NeobrutalismThemeProvider,
} from 'react-native-neobrutalism';

const meta: Meta<typeof Breadcrumb> = {
  title: 'Navigation/Breadcrumb',
  component: Breadcrumb,
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
    accessibilityLabel: {
      control: 'text',
      description: 'Accessibility label for the breadcrumb navigation',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Breadcrumb>;

// Playground - args-controlled story
interface PlaygroundArgs {
  separator: string;
  homeName: string;
  currentPage: string;
  middleItems: string;
}

export const Playground: StoryObj<PlaygroundArgs> = {
  args: {
    separator: '›',
    homeName: 'Home',
    currentPage: 'Current Page',
    middleItems: 'Products, Category',
  },
  argTypes: {
    separator: {
      control: 'text',
      description: 'Separator character between items',
    },
    homeName: {
      control: 'text',
      description: 'First breadcrumb item name',
    },
    currentPage: {
      control: 'text',
      description: 'Current page name (last item)',
    },
    middleItems: {
      control: 'text',
      description: 'Comma-separated middle items',
    },
  },
  render: (args) => {
    const middleItemsArray = args.middleItems?.split(',').map((s) => s.trim()).filter(Boolean) || [];
    return (
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink onPress={() => console.log('Home')}>
              {args.homeName}
            </BreadcrumbLink>
          </BreadcrumbItem>
          {middleItemsArray.map((item, index) => (
            <View key={index} style={{ flexDirection: 'row', alignItems: 'center' }}>
              <BreadcrumbSeparator>{args.separator}</BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink onPress={() => console.log(item)}>{item}</BreadcrumbLink>
              </BreadcrumbItem>
            </View>
          ))}
          <BreadcrumbSeparator>{args.separator}</BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage>{args.currentPage}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    );
  },
};

// Default
export const Default: Story = {
  render: () => (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink onPress={() => console.log('Home')}>Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink onPress={() => console.log('Products')}>Products</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Current Page</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
};

// Two Items
export const TwoItems: Story = {
  render: () => (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink onPress={() => console.log('Home')}>Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Dashboard</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
};

// Long Breadcrumb
export const LongBreadcrumb: Story = {
  render: () => (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink onPress={() => {}}>Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink onPress={() => {}}>Category</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink onPress={() => {}}>Subcategory</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink onPress={() => {}}>Product Type</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Product Details</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
};

// Custom Separator
export const CustomSeparator: Story = {
  render: () => (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink onPress={() => {}}>Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>/</BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink onPress={() => {}}>Products</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>/</BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage>Item</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
};

// Arrow Separator
export const ArrowSeparator: Story = {
  render: () => (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink onPress={() => {}}>Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>→</BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink onPress={() => {}}>Settings</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>→</BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage>Profile</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
};

// Disabled Link
export const DisabledLink: Story = {
  render: () => (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink onPress={() => {}} disabled>
            Home (Disabled)
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink onPress={() => {}}>Products</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Current</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
};

// Custom Theme
export const CustomTheme: Story = {
  decorators: [
    (Story) => (
      <NeobrutalismThemeProvider
        theme={{
          colors: { foreground: '#1a1a2e' },
          spacing: { xs: 8, sm: 12 },
        }}
      >
        <View style={{ padding: 20 }}>
          <Story />
        </View>
      </NeobrutalismThemeProvider>
    ),
  ],
  render: () => (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink onPress={() => {}}>Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink onPress={() => {}}>About</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Team</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
};

// With Custom Icon Separator
export const IconSeparator: Story = {
  render: () => (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink onPress={() => {}}>Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <Text style={{ fontSize: 10, opacity: 0.5 }}>●</Text>
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink onPress={() => {}}>Blog</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <Text style={{ fontSize: 10, opacity: 0.5 }}>●</Text>
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage>Article</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
};

// Interactive Demo
export const Interactive: Story = {
  render: () => (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink onPress={() => console.log('Navigating to Home')}>
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink onPress={() => console.log('Navigating to Docs')}>
            Documentation
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink onPress={() => console.log('Navigating to Components')}>
            Components
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  ),
};
