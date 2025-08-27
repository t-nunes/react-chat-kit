import type { MessageRootProps } from './MessageRoot.types';
import styles from './MessageRoot.module.scss';
import clsx from 'clsx';

export const MessageRoot = ({ fromMe, children, ...rest }: MessageRootProps) => {
  return (
    <div
      className={clsx(styles.wrapper, {
        'message-out': fromMe,
        'message-in': !fromMe,
      })}
      {...rest}
    >
      {children}
    </div>
  );
};
