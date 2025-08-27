import type { Reply } from './Reply';
import type { Sender } from './Sender';

export type MessageStatus = 'read' | 'sending' | 'delivered';

export type MessageBase = {
  sender?: Sender;
  timestamp: string;
  status: MessageStatus;
  isForwarded?: boolean;
  isEdited?: boolean;
  isDeleted?: boolean;
  isFromMe: boolean;
  reply?: Reply;
};
