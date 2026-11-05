export interface IconButtonProps {
  icon: string;
  /** Required accessible name */
  label: string;
  onClick?: () => void;
  variant?: 'surface' | 'soft' | 'inverse' | 'glass';
  size?: 'md' | 'sm';
  /** Red dot for unread / attention */
  badge?: boolean;
  /** Unread count pill (red); appended to the accessible label */
  badgeCount?: number;
}
export declare function IconButton(props: IconButtonProps): JSX.Element;
