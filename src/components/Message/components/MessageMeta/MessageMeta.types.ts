export type MessageMetaVariants = 'default' | 'bubble' | 'overlay';

export type MessageMetaProps = {
  variant?: MessageMetaVariants;
  children?: React.ReactNode;
};
