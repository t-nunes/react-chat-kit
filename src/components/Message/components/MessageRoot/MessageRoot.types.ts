import * as React from 'react';

export interface MessageRootProps extends React.HTMLAttributes<HTMLDivElement> {
  fromMe: boolean;
}
