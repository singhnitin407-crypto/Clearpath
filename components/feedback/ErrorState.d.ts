export interface ErrorStateProps {
  icon?: string;
  /** danger = failed money action · warning = needs attention / pending · info = security · neutral = connectivity/system */
  tone?: 'danger' | 'warning' | 'info' | 'neutral';
  title: string;
  /** What happened + what it means for the user's money. One or two sentences. */
  children?: React.ReactNode;
  /** Key/value facts, e.g. Amount, Reference, Money debited */
  details?: [string, React.ReactNode][];
  /** Technical code shown small at the bottom, for support */
  code?: string;
  actionLabel?: string;
  onAction?: () => void;
  actionIcon?: string;
  secondaryLabel?: string;
  onSecondary?: () => void;
  compact?: boolean;
}
export declare function ErrorState(props: ErrorStateProps): JSX.Element;
export interface OfflineBarProps { title?: string; label?: string; actionLabel?: string; onAction?: () => void; }
export declare function OfflineBar(props: OfflineBarProps): JSX.Element;
