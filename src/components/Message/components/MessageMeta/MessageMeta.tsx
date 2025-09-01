import type { MessageMetaProps } from './MessageMeta.types.ts';
import { MessageStatus } from '@/components/Message/components/MessageStatus';
import styles from './MessageMeta.module.scss';
import clsx from 'clsx';

export const MessageMeta = ({
  variant = 'default',
  colorStatus,
  children,
  status = 'none',
}: MessageMetaProps) => {
  return (
    <div
      className={clsx(
        styles.wrapper,
        {
          [styles[variant]]: variant,
        },
        'ck-meta',
      )}
    >
      {children}
      <MessageStatus status={status} color={colorStatus} />
    </div>
  );
};
