import * as React from 'react';
import styles from './MessageContent.module.scss';

type TProps = {
  children: React.ReactNode;
};

export const MessageContent = ({ children }: TProps) => {
  return <div className={styles.wrapper}>{children}</div>;
};
