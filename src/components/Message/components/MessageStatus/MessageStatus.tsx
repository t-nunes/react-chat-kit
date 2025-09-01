import type { MessageStatusProps, MessageStatus as TMessageStatus } from './MessageStatus.types.ts';
import { MdDone, MdDoneAll, MdErrorOutline, MdSchedule } from 'react-icons/md';
import { IconType } from 'react-icons';
import styles from './MessageStatus.module.scss';
import clsx from 'clsx';

type IconStatus = Exclude<TMessageStatus, 'none'>;

const MAP: Record<IconStatus, IconType> = {
  pending: MdSchedule,
  sended: MdDone,
  delivered: MdDoneAll,
  received: MdDoneAll,
  error: MdErrorOutline,
};

export const MessageStatus = ({ status, color }: MessageStatusProps) => {
  if (status === 'none') return null;

  const Icon = MAP[status];

  const classes = clsx(
    styles.wrapper,
    status === 'received' && styles.received,
    status === 'error' && styles.error,
  );

  return <Icon className={classes} color={color} />;
};
