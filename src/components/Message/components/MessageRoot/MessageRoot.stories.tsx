import type { Meta, StoryObj } from '@storybook/react-vite';
import { MessageRoot } from './MessageRoot';

const meta: Meta<typeof MessageRoot> = {
  title: 'Message/MessageRoot',
  component: MessageRoot,
  args: {
    isFromMe: false,
    children: <div>Sample message content</div>,
  },
};
export default meta;

type Story = StoryObj<typeof MessageRoot>;

export const FromOthers: Story = {
  args: {
    isFromMe: false,
    children: <div>Hello from someone else</div>,
  },
};

export const FromMe: Story = {
  args: {
    isFromMe: true,
    children: <div>My own message</div>,
  },
};
