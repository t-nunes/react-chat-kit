export type MessageStatus = 'none' | 'pending' | 'sended' | 'delivered' | 'received' | 'error';

export type MessageStatusProps = {
  color?: string;
  status: MessageStatus;
};
