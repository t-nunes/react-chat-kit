import type { MessageContentProps } from '@/components/Message';
import styles from './MessageContent.module.scss';
import clsx from 'clsx';

export const MessageContent = ({
  variant = 'default',
  children,
  className,
}: MessageContentProps) => {
  return (
    <div
      className={clsx(
        styles.wrapper,
        {
          [`is-${variant}`]: variant,
        },
        className,
      )}
    >
      {children}
    </div>
  );
};
