import type { Decorator } from '@storybook/react';
import { MessageRoot } from '@/components/Message';

export const withTheme: Decorator = (Story) => {
  return (
    <>
      <h1>Light Theme</h1>
      <MessageRoot isFromMe={false}>
        <Story />
      </MessageRoot>
      <MessageRoot isFromMe={true}>
        <Story />
      </MessageRoot>
      <div className="dark-theme">
        <h1>Dark Theme</h1>
        <MessageRoot isFromMe={false}>
          <Story />
        </MessageRoot>
        <MessageRoot isFromMe={true}>
          <Story />
        </MessageRoot>
      </div>
    </>
  );
};
