import type { Meta, StoryObj } from '@storybook/react-vite';
import { MessageContent } from './MessageContent';
import { withTheme } from '@/stories/decorators/withTheme';

const meta = {
  title: 'Message/MessageContent',
  component: MessageContent,
  args: {
    variant: 'default',
    children: 'Hello world',
  },
  decorators: [withTheme],
} satisfies Meta<typeof MessageContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithLongText: Story = {
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
  },
};

export const WithElements: Story = {
  args: {
    children: (
      <div>
        <strong>User:</strong> John Doe
      </div>
    ),
  },
};
