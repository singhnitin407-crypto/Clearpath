/**
 * @startingPoint section="Loan" subtitle="Instalment history list with status icons" viewport="390x360"
 */
export interface InstalmentTimelineProps {
  /** Omit for a header-less list (e.g. under a page title) */
  title?: string;
  summary?: string;
  /** Newest first */
  items: { id?: string | number; title: string; meta?: string; amount: number; status: 'paid' | 'overdue' | 'upcoming' }[];
  currency?: string;
  /** Header slot, e.g. a ghost "See all" button */
  action?: React.ReactNode;
  /** Localised status words */
  statusLabels?: { paid?: string; overdue?: string; upcoming?: string };
}
export declare function InstalmentTimeline(props: InstalmentTimelineProps): JSX.Element;
