export interface NotificationItemProps {
  icon?: string;
  /** Icon-circle colour: offer (amber), info (teal), success (green), danger (red), neutral */
  tone?: 'offer' | 'info' | 'success' | 'danger' | 'neutral';
  title: string;
  /** Clamped to 2 lines */
  body?: string;
  time?: string;
  unread?: boolean;
  onClick?: () => void;
}
export declare function NotificationItem(props: NotificationItemProps): JSX.Element;
