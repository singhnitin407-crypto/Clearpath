export interface BarChartProps {
  title?: string;
  value?: number | string;
  valueCurrency?: string;
  caption?: string;
  data: { label: string; value: number }[];
  highlightIndex?: number;
  formatValue?: (v: number) => string;
  tone?: 'light' | 'dark';
  height?: number;
  /** Slot top-right, e.g. a period SegmentedControl */
  action?: React.ReactNode;
}
export declare function BarChart(props: BarChartProps): JSX.Element;
