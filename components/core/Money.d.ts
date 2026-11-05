export interface MoneyProps {
  amount: number | string;
  currency?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'hero';
  tone?: 'default' | 'saving' | 'in' | 'out' | 'muted' | 'danger' | 'inverse';
  sign?: string;
  weight?: number;
}
export declare function Money(props: MoneyProps): JSX.Element;
