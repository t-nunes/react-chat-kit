// src/components/MessageMeta/MessageMeta.stories.tsx
import type { Meta, StoryObj } from '@storybook/react-vite';
import { MessageMeta } from './MessageMeta';
import { withTheme } from '@/stories/decorators/withTheme';
import { withMessageContent } from '@/stories/decorators/withMessageContent';
import { TMessageStatus } from '@/components/Message';

const meta = {
  title: 'Message/MessageMeta',
  component: MessageMeta,
  args: {
    children: '12:45',
  },
  argTypes: {
    variant: { control: { disable: true }, table: { disable: true } },
  },
} satisfies Meta<typeof MessageMeta>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithThemes: Story = {
  decorators: [withMessageContent, withTheme],
  args: { variant: 'default', status: 'none' },
};

export const Bubble: Story = {
  decorators: [withTheme],
  args: {
    variant: 'bubble',
  },
  render: ({ status, colorStatus, children }) => {
    return (
      <div>
        <h3>Message In</h3>
        <div style={{ display: 'flex' }} className="message-in">
          <MessageMeta variant="bubble" status={status} colorStatus={colorStatus}>
            {children}
          </MessageMeta>
        </div>
        <h3>Message Out</h3>
        <div style={{ display: 'flex' }} className="message-out">
          <MessageMeta variant="bubble" status={status} colorStatus={colorStatus}>
            {children}
          </MessageMeta>
        </div>
      </div>
    );
  },
};

export const Overlay: Story = {
  args: {
    variant: 'overlay',
  },
  render: ({ status, children }) => {
    return (
      <div>
        <div style={{ width: 400, display: 'flex', position: 'relative' }} className="message-in">
          <img
            src="https://placehold.co/600x400/EEE/31343C"
            alt=""
            style={{ display: 'block', width: '100%' }}
          />
          <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%' }}>
            <MessageMeta variant="overlay" status={status} colorStatus="rgba(233, 237, 239, 0.9)">
              {children}
            </MessageMeta>
          </div>
        </div>
      </div>
    );
  },
};

export const All: Story = {
  decorators: [withMessageContent, withTheme],
  args: {
    variant: 'default',
  },
  render: () => {
    const items: Array<{ label: string; status: TMessageStatus; colorStatus?: string }> = [
      { label: 'none', status: 'none' },
      { label: 'pending', status: 'pending' },
      { label: 'sended', status: 'sended' },
      { label: 'delivered', status: 'delivered' },
      { label: 'received', status: 'received', colorStatus: '#3B86F6' },
      { label: 'error', status: 'error', colorStatus: '#EF4444' },
    ];

    return (
      <div style={{ display: 'grid', gap: 12 }}>
        {items.map((item) => (
          <MessageMeta key={item.label} status={item.status} colorStatus={item.colorStatus}>
            {item.label} • 12:45
          </MessageMeta>
        ))}
      </div>
    );
  },
};
