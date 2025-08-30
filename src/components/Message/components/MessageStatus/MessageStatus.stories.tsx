// src/components/MessageStatus/MessageStatus.stories.tsx
import type { Meta, StoryObj } from '@storybook/react-vite';
import { MessageStatus } from './MessageStatus';
import type { MessageStatus as TMessageStatus } from './MessageStatus.types';
import { withTheme } from '@/stories/decorators/withTheme';
import { withMessageContent } from '@/stories/decorators/withMessageContent';

type Args = {
  status: TMessageStatus;
  color?: string;
};

const meta = {
  title: 'Message/MessageStatus',
  component: MessageStatus,
  decorators: [withMessageContent, withTheme],
  argTypes: {
    color: { control: 'color' },
  },
} satisfies Meta<Args>;

export default meta;
type Story = StoryObj<Args>;

export const AllWithColor: Story = {
  args: { color: '' },
  render: (args) => {
    const items: Array<{ label: string; status: TMessageStatus }> = [
      { label: 'pending', status: 'pending' },
      { label: 'sended', status: 'sended' },
      { label: 'delivered', status: 'delivered' },
      { label: 'received', status: 'received' },
      { label: 'error', status: 'error' },
      { label: 'none', status: 'none' },
    ];

    return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(6, minmax(90px, 1fr))',
          gap: 16,
        }}
      >
        {items.map((it) => (
          <div
            key={it.label}
            style={{
              display: 'grid',
              gap: 5,
              placeItems: 'center',
              padding: 10,
              border: '1px solid #e5e7eb',
              borderRadius: 4,
            }}
          >
            <MessageStatus status={it.status} color={args.color} />
            <div style={{ fontSize: 12 }}>{it.label}</div>
          </div>
        ))}
      </div>
    );
  },
};
