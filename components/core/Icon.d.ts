export interface IconProps {
  /** Lucide icon name, e.g. 'bell', 'calendar', 'hand-coins' */
  name: string;
  size?: number;
  color?: string;
  /** Accessible label; omit for decorative icons */
  label?: string;
}
export declare function Icon(props: IconProps): JSX.Element;
