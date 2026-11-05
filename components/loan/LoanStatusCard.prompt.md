The home hero: a deep-teal card with the status pill, the outstanding balance in large type, a segmented instalment track, a white next-payment panel, and optional quick-action tiles.
```jsx
<LoanStatusCard nextDate="9 December 2026" nextAmount={14800} balance={133200} paidCount={9} totalCount={18} actions={[{icon:'hand-coins',label:'Pay early'}]} />
```
When overdue, the next-payment panel turns red and `note` states the capped late fee.

`lead="payment"` puts the next payment amount first, at hero size, with the due date in a small pill below it (red when overdue). It also moves the balance into a compact glass row with the track. Use it on Home, where the next action matters more than the total.

With `lead="payment"`, pass `payLabel="Pay now"` and `onPay` to put a compact mint pill (44px, the minimum touch target) on the same line as the amount. Keeping the button next to the figure ties the action to what's owed without outweighing it. That makes the card's one primary action obvious. Don't repeat the same button in a banner on the same screen.

In `lead="payment"` the date and the auto-debit or late-fee note sit on one icon row. The balance block pairs "Balance" with a large `paid/total` fraction above the track. Pass a short `progressLabel` such as "Paid" there, not a sentence.
