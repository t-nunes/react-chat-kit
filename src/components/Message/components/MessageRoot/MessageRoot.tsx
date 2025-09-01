import type { MessageRootProps } from './MessageRoot.types';
import styles from './MessageRoot.module.scss';
import clsx from 'clsx';

export const MessageRoot = ({ isFromMe, children, ...rest }: MessageRootProps) => {
  return (
    <div
      className={clsx(styles.wrapper, {
        'message-out': isFromMe,
        'message-in': !isFromMe,
      })}
      {...rest}
    >
      {children}
    </div>
  );
};
