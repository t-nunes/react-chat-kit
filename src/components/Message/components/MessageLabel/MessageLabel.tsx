import type { MessageLabelProps } from './MessageLabel.types';
import styles from './MessageLabel.module.scss';
import clsx from 'clsx';

export const MessageLabel = ({ children, className, color, onClick }: MessageLabelProps) => {
  const isClickable = !!onClick;

  return (
    <span
      className={clsx(
        styles.wrapper,
        {
          [styles.isClickable]: isClickable,
        },
        className,
      )}
      style={{ color }}
      onClick={onClick}
    >
      {children}
    </span>
  );
};
