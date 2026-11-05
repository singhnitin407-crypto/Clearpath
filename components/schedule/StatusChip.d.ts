export interface StatusChipProps {
  status?: 'paid' | 'overdue' | 'upcoming';
  label?: string;
  size?: 'md' | 'sm';
  /** Glass treatment on dark hero cards (overdue stays red) */
  onDark?: boolean;
}
export declare function StatusChip(props: StatusChipProps): JSX.Element;
