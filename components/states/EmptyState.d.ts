export interface EmptyStateProps {
  icon?: string;
  title: string;
  children?: React.ReactNode;
  actionLabel?: string;
  onAction?: () => void;
  actionIcon?: string;
  secondaryLabel?: string;
  onSecondary?: () => void;
  /** No card surface, smaller rings; primary full-width action. For use inside sheets/cards */
  compact?: boolean;
  tone?: 'teal' | 'neutral';
}
export declare function EmptyState(props: EmptyStateProps): JSX.Element;
