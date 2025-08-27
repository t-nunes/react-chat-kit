import { MessageRoot } from './components/MessageRoot';
import type { MessageRootProps } from './components/MessageRoot';

import { MessageContent } from './components/MessageContent';
import type { MessageContentProps } from './components/MessageContent';

import { MessageLabel } from './components/MessageLabel';
import type { MessageLabelProps } from './components/MessageLabel';

export { MessageRoot, MessageContent, MessageLabel };
export type { MessageRootProps, MessageContentProps, MessageLabelProps };

const Message = {
  Root: MessageRoot,
  Content: MessageContent,
  Label: MessageLabel,
};

export { Message };
