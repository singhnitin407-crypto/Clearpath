export interface SlideToConfirmProps {
  /** e.g. 'Pay with Face ID' */
  label: string;
  /** Fires after the knob reaches the end (or on tap / Enter) */
  onConfirm: () => void;
  rtl?: boolean;
}
export declare function SlideToConfirm(props: SlideToConfirmProps): JSX.Element;
