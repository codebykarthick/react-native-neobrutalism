import type { Meta, StoryObj } from '@storybook/react';

import { Button } from 'react-native-neobrutalism';

const meta: Meta<typeof Button> = {
  title: 'Buttons/Button',
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Basic: Story = {
  args: {
    label: 'Brutal Button',
  },
};

export const WithPress: Story = {
  args: {
    label: 'Press me',
    onPress: () => {
      console.log('pressed');
    },
  },
};
