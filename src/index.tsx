import cn from 'classnames';
import { CSSProperties, ReactNode } from 'react';
import './index.css';

export interface WouterSearchProps {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export function WouterSearch({ children, className, style }: WouterSearchProps) {
  return <WouterSearch className={cn('wouter-search', className)} style={style}>{children}</WouterSearch>;
}
