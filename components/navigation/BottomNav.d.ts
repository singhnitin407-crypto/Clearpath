/**
 * @startingPoint section="Navigation" subtitle="Floating pill tab bar" viewport="390x90"
 */
export interface BottomNavProps {
  items: { key: string; icon: string; label: string }[];
  value: string;
  onChange?: (key: string) => void;
  label?: string;
}
export declare function BottomNav(props: BottomNavProps): JSX.Element;
