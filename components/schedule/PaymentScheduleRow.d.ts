/**
 * @startingPoint section="Loan" subtitle="Instalment row with date, amount and status" viewport="390x90"
 */
export interface PaymentScheduleRowProps {
  day: string | number;
  month: string;
  title: string;
  detail?: string;
  amount: number | string;
  currency?: string;
  status?: 'paid' | 'overdue' | 'upcoming';
  statusLabel?: string;
  current?: boolean;
  onClick?: () => void;
}
export declare function PaymentScheduleRow(props: PaymentScheduleRowProps): JSX.Element;
