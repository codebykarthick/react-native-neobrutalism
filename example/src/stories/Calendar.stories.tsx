import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { View, Text } from 'react-native';

import {
  Calendar,
  NeobrutalismThemeProvider,
  type DateRange,
} from 'react-native-neobrutalism';

const meta: Meta<typeof Calendar> = {
  title: 'Data Display/Calendar',
  component: Calendar,
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
    mode: 'single',
    tone: 'primary',
    showOutsideDays: true,
  },
  argTypes: {
    mode: {
      control: 'select',
      options: ['single', 'range'],
      description: 'Selection mode - single date or date range',
    },
    tone: {
      control: 'select',
      options: ['primary', 'neutral'],
      description: 'Visual tone variant',
    },
    showOutsideDays: {
      control: 'boolean',
      description: 'Show days from adjacent months',
    },
    shadowStyle: {
      control: 'object',
      description: 'Shadow styles (set to null to hide)',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Calendar>;

// Default
export const Default: Story = {
  args: {},
};

// Single Selection - Primary Tone
export const SinglePrimary: Story = {
  render: function Controlled() {
    const [date, setDate] = useState<Date | undefined>(new Date());
    return (
      <View style={{ gap: 16 }}>
        <Calendar
          mode="single"
          tone="primary"
          selected={date}
          onSelect={setDate}
        />
        <Text style={{ fontWeight: '600' }}>
          Selected: {date ? date.toLocaleDateString() : 'None'}
        </Text>
      </View>
    );
  },
};

// Single Selection - Neutral Tone
export const SingleNeutral: Story = {
  render: function Controlled() {
    const [date, setDate] = useState<Date | undefined>(new Date());
    return (
      <View style={{ gap: 16 }}>
        <Calendar
          mode="single"
          tone="neutral"
          selected={date}
          onSelect={setDate}
        />
        <Text style={{ fontWeight: '600' }}>
          Selected: {date ? date.toLocaleDateString() : 'None'}
        </Text>
      </View>
    );
  },
};

// Range Selection - Primary Tone
export const RangePrimary: Story = {
  render: function Controlled() {
    const [range, setRange] = useState<DateRange>({
      from: undefined,
      to: undefined,
    });
    return (
      <View style={{ gap: 16 }}>
        <Calendar
          mode="range"
          tone="primary"
          selectedRange={range}
          onSelectRange={setRange}
        />
        <Text style={{ fontWeight: '600' }}>
          From: {range.from ? range.from.toLocaleDateString() : 'Not selected'}
        </Text>
        <Text style={{ fontWeight: '600' }}>
          To: {range.to ? range.to.toLocaleDateString() : 'Not selected'}
        </Text>
      </View>
    );
  },
};

// Range Selection - Neutral Tone
export const RangeNeutral: Story = {
  render: function Controlled() {
    const [range, setRange] = useState<DateRange>({
      from: undefined,
      to: undefined,
    });
    return (
      <View style={{ gap: 16 }}>
        <Calendar
          mode="range"
          tone="neutral"
          selectedRange={range}
          onSelectRange={setRange}
        />
        <Text style={{ fontWeight: '600' }}>
          From: {range.from ? range.from.toLocaleDateString() : 'Not selected'}
        </Text>
        <Text style={{ fontWeight: '600' }}>
          To: {range.to ? range.to.toLocaleDateString() : 'Not selected'}
        </Text>
      </View>
    );
  },
};

// All Variants Side by Side
export const AllVariants: Story = {
  render: function AllVariantsRender() {
    const [singlePrimaryDate, setSinglePrimaryDate] = useState<Date | undefined>(
      new Date()
    );
    const [singleNeutralDate, setSingleNeutralDate] = useState<Date | undefined>(
      new Date()
    );

    return (
      <View style={{ gap: 24 }}>
        <View>
          <Text style={{ fontSize: 16, fontWeight: '700', marginBottom: 12 }}>
            Primary Tone
          </Text>
          <Calendar
            mode="single"
            tone="primary"
            selected={singlePrimaryDate}
            onSelect={setSinglePrimaryDate}
          />
        </View>
        <View>
          <Text style={{ fontSize: 16, fontWeight: '700', marginBottom: 12 }}>
            Neutral Tone
          </Text>
          <Calendar
            mode="single"
            tone="neutral"
            selected={singleNeutralDate}
            onSelect={setSingleNeutralDate}
          />
        </View>
      </View>
    );
  },
};

// With Min/Max Date Constraints
export const WithConstraints: Story = {
  render: function Controlled() {
    const today = new Date();
    const minDate = new Date(today.getFullYear(), today.getMonth(), 1);
    const maxDate = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    const [date, setDate] = useState<Date | undefined>(today);

    return (
      <View style={{ gap: 16 }}>
        <Text style={{ fontWeight: '600' }}>
          Only dates in current month are selectable
        </Text>
        <Calendar
          mode="single"
          tone="primary"
          selected={date}
          onSelect={setDate}
          minDate={minDate}
          maxDate={maxDate}
        />
      </View>
    );
  },
};

// With Disabled Dates
export const WithDisabledDates: Story = {
  render: function Controlled() {
    const today = new Date();
    const disabledDates = [
      new Date(today.getFullYear(), today.getMonth(), 10),
      new Date(today.getFullYear(), today.getMonth(), 15),
      new Date(today.getFullYear(), today.getMonth(), 20),
      new Date(today.getFullYear(), today.getMonth(), 25),
    ];
    const [date, setDate] = useState<Date | undefined>();

    return (
      <View style={{ gap: 16 }}>
        <Text style={{ fontWeight: '600' }}>
          10th, 15th, 20th, and 25th are disabled
        </Text>
        <Calendar
          mode="single"
          tone="primary"
          selected={date}
          onSelect={setDate}
          disabledDates={disabledDates}
        />
      </View>
    );
  },
};

// Without Outside Days
export const NoOutsideDays: Story = {
  args: {
    showOutsideDays: false,
  },
};

// Without Shadow
export const NoShadow: Story = {
  args: {
    shadowStyle: null,
  },
};

// Custom Theme
export const CustomTheme: Story = {
  decorators: [
    (Story) => (
      <NeobrutalismThemeProvider
        theme={{
          shadow: { offsetX: 6, offsetY: 6, color: '#333333' },
          colors: {
            primary: '#FF6B6B',
            primaryForeground: '#FFFFFF',
            background: '#FFF5F5',
          },
          border: { radius: 12 },
        }}
      >
        <View style={{ padding: 20 }}>
          <Story />
        </View>
      </NeobrutalismThemeProvider>
    ),
  ],
  render: function Controlled() {
    const [date, setDate] = useState<Date | undefined>(new Date());
    return (
      <Calendar mode="single" tone="primary" selected={date} onSelect={setDate} />
    );
  },
};

// Date Picker Use Case
export const DatePickerExample: Story = {
  render: function DatePicker() {
    const [selectedDate, setSelectedDate] = useState<Date | undefined>();

    return (
      <View style={{ gap: 16, maxWidth: 320 }}>
        <View
          style={{
            padding: 12,
            backgroundColor: '#f5f5f5',
            borderRadius: 8,
            borderWidth: 2,
            borderColor: '#000',
          }}
        >
          <Text style={{ fontWeight: '600', marginBottom: 4 }}>
            Select a Date
          </Text>
          <Text>
            {selectedDate
              ? selectedDate.toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })
              : 'No date selected'}
          </Text>
        </View>
        <Calendar
          mode="single"
          tone="primary"
          selected={selectedDate}
          onSelect={setSelectedDate}
        />
      </View>
    );
  },
};

// Date Range Picker Use Case
export const DateRangePickerExample: Story = {
  render: function DateRangePicker() {
    const [range, setRange] = useState<DateRange>({
      from: undefined,
      to: undefined,
    });

    const formatDate = (date: Date | undefined) =>
      date
        ? date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
          })
        : '—';

    return (
      <View style={{ gap: 16, maxWidth: 320 }}>
        <View
          style={{
            padding: 12,
            backgroundColor: '#f5f5f5',
            borderRadius: 8,
            borderWidth: 2,
            borderColor: '#000',
          }}
        >
          <Text style={{ fontWeight: '600', marginBottom: 8 }}>
            Select Date Range
          </Text>
          <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 12, color: '#666' }}>Check-in</Text>
              <Text style={{ fontWeight: '500' }}>{formatDate(range.from)}</Text>
            </View>
            <Text>→</Text>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 12, color: '#666' }}>Check-out</Text>
              <Text style={{ fontWeight: '500' }}>{formatDate(range.to)}</Text>
            </View>
          </View>
        </View>
        <Calendar
          mode="range"
          tone="primary"
          selectedRange={range}
          onSelectRange={setRange}
        />
      </View>
    );
  },
};
