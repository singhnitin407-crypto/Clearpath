export interface MetricTrendProps {
  label: string;
  value: number | string;
  currency?: string;
  delta?: string;
  trend?: 'up' | 'down' | 'flat';
  sentiment?: 'good' | 'bad' | 'neutral';
  data?: number[];
  chart?: 'bars' | 'line';
  highlightIndex?: number;
  caption?: string;
}
export declare function MetricTrend(props: MetricTrendProps): JSX.Element;
