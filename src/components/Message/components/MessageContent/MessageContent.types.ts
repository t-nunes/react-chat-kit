import type { ReactNode } from 'react';

export type MessageVariant = 'out' | 'in';

export type MessageRootProps = {
  variant?: MessageVariant;
  children: ReactNode;
  className?: string;
};

export type MessageContentProps = {
  children: ReactNode;
  className?: string;
};

export type MessageInformationsProps = {
  children: ReactNode;
  className?: string;
};
