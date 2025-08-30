export type MessageContentVariant = 'default' | 'sticker' | 'media';

export type MessageContentProps = {
  children: React.ReactNode;
  className?: string;
  variant?: MessageContentVariant;
};
