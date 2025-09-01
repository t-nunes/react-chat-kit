import { MessageRoot } from './components/MessageRoot';
import type { MessageRootProps } from './components/MessageRoot';

import { MessageContent } from './components/MessageContent';
import type { MessageContentProps } from './components/MessageContent';

import { MessageLabel } from './components/MessageLabel';
import type { MessageLabelProps } from './components/MessageLabel';

export { MessageRoot, MessageContent, MessageLabel };
export type { MessageRootProps, MessageContentProps, MessageLabelProps };

import { MessageStatus } from './components/MessageStatus';
export type { MessageStatusProps, TMessageStatus } from './components/MessageStatus';

import { MessageMeta } from './components/MessageMeta';
export type { MessageMetaProps, MessageMetaVariants } from './components/MessageMeta';

const Message = {
  Root: MessageRoot,
  Content: MessageContent,
  Label: MessageLabel,
  Status: MessageStatus,
  Meta: MessageMeta,
};

export { Message };
