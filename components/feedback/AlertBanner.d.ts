export interface AlertBannerProps {
  variant?: 'info' | 'warning' | 'action' | 'offer';
  icon?: string;
  label?: string;
  title?: string;
  children?: React.ReactNode;
  actionLabel?: string;
  onAction?: () => void;
  onDismiss?: () => void;
  dismissLabel?: string;
  /** offer only — pill text above the figure */
  badge?: string;
  /** offer only — hero figure, e.g. '2.1%' */
  highlight?: string;
  highlightPrefix?: string;
  /** offer only — content of the white net-saving strip (always show AED net) */
  saving?: React.ReactNode;
}
export declare function AlertBanner(props: AlertBannerProps): JSX.Element;
