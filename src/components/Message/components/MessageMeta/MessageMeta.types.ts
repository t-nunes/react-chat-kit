import type { TMessageStatus } from '@/components/Message';

export type MessageMetaVariants = 'default' | 'bubble' | 'overlay';

export type MessageMetaProps = {
  variant?: MessageMetaVariants;
  status?: TMessageStatus;
  colorStatus?: string;
  children?: React.ReactNode;
};
