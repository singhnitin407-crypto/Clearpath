export interface SegmentedControlProps {
  options: { value: string; label: string }[];
  value: string;
  onChange?: (value: string) => void;
  tone?: 'light' | 'dark';
  size?: 'md' | 'sm';
  fullWidth?: boolean;
  label?: string;
}
export declare function SegmentedControl(props: SegmentedControlProps): JSX.Element;
