/**
 * @startingPoint section="Loan" subtitle="Dark hero card: status, balance, next payment, quick actions" viewport="390x440"
 */
export interface LoanStatusCardProps {
  status?: 'on-track' | 'due-soon' | 'overdue' | 'closed';
  statusLabel?: string;
  title?: string;
  reference?: string;
  balanceLabel?: string;
  balance: number;
  currency?: string;
  nextLabel?: string;
  nextDate: string;
  nextAmount?: number;
  nextDetail?: string;
  note?: string;
  paidCount?: number;
  totalCount?: number;
  progressLabel?: string;
  /** 'payment' leads with the next payment amount (recommended for Home); 'balance' leads with the outstanding balance */
  lead?: 'balance' | 'payment';
  /** Compact pay CTA inline with the amount (lead='payment'); mint pill, 44px */
  payLabel?: string;
  onPay?: () => void;
  actions?: { icon: string; label: string; onClick?: () => void }[];
}
export declare function LoanStatusCard(props: LoanStatusCardProps): JSX.Element;
