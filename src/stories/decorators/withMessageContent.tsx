import type { Decorator } from '@storybook/react';
import { MessageContent } from '@/components/Message';

export const withMessageContent: Decorator = (Story) => (
  <>
    <MessageContent>
      <Story />
    </MessageContent>
  </>
);
