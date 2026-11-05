export interface ButtonProps {
  variant?: 'primary' | 'accent' | 'soft' | 'inverse' | 'ghost';
  /** md = 48px, sm = 44px */
  size?: 'md' | 'sm';
  icon?: string;
  iconEnd?: string;
  fullWidth?: boolean;
  disabled?: boolean;
  type?: 'button' | 'submit';
  onClick?: () => void;
  children: React.ReactNode;
}
export declare function Button(props: ButtonProps): JSX.Element;
