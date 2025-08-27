import type { Decorator } from '@storybook/react';
import { MessageRoot } from '@/components/Message';

export const withTheme: Decorator = (Story) => (
  <>
    <h1>Light Theme</h1>
    <MessageRoot fromMe={false}>
      <Story />
    </MessageRoot>
    <MessageRoot fromMe={true}>
      <Story />
    </MessageRoot>
    <div className="dark-theme">
      <h1>Dark Theme</h1>
      <MessageRoot fromMe={false}>
        <Story />
      </MessageRoot>
      <MessageRoot fromMe={true}>
        <Story />
      </MessageRoot>
    </div>
  </>
);
