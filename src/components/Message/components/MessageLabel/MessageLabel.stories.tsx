import type { Meta, StoryObj } from '@storybook/react-vite';
import { MessageLabel } from './MessageLabel';
import { withTheme } from '@/stories/decorators/withTheme';
import { withMessageContent } from '@/stories/decorators/withMessageContent';

const meta: Meta<typeof MessageLabel> = {
  title: 'Message/MessageLabel',
  component: MessageLabel,
  args: {
    children: 'Default Label',
    color: '#3B86F6',
  },
  decorators: [withMessageContent, withTheme],
};
export default meta;

type Story = StoryObj<typeof MessageLabel>;

export const Default: Story = {
  decorators: (Story) => {
    return (
      <>
        <Story />
        Content 1
      </>
    );
  },
};

export const Clickable: Story = {
  decorators: (Story) => {
    return (
      <>
        <Story />
        <p>Content 1</p>
        <p>Content 2</p>
      </>
    );
  },
  args: {
    children: 'Click Me',
    color: '#EF8751',
    onClick: () => alert('Label clicked'),
  },
};
