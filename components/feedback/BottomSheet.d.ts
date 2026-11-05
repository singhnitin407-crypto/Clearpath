export interface BottomSheetProps {
  open: boolean;
  onClose?: () => void;
  /** Accessible dialog name */
  title?: string;
  children?: React.ReactNode;
  /** Element to portal into (e.g. the phone frame); falls back to fixed full-viewport */
  container?: Element | null;
  dir?: 'ltr' | 'rtl';
}
export declare function BottomSheet(props: BottomSheetProps): JSX.Element | null;
