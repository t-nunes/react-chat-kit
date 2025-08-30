export type MessageStatus = 'pending' | 'sended' | 'delivered' | 'received' | 'error';

export type MessageStatusProps = {
  status: MessageStatus;
};
