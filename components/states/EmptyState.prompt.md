Use EmptyState for any section with no data yet. It shows a ringed icon disc as the illustration, a title, one sentence saying why the section is empty or when data will appear, and up to two actions.
```jsx
<EmptyState icon="receipt-text" title="No payments yet" actionLabel="View schedule">Your first instalment is due on 9 December.</EmptyState>
<EmptyState compact icon="landmark" title="No bank account linked" actionLabel="Link bank account" actionIcon="plus" secondaryLabel="Pay by bank transfer">Link an account to pay instantly.</EmptyState>
```
Use `compact` inside sheets and cards: it drops the card surface and makes the primary action full width. Use `tone="neutral"` when the empty state is a good thing, e.g. "all caught up". Never just say "Nothing here".

Scenarios in the app:
- Notifications: none, or all cleared.
- Pay sheet: no bank account linked.
- Home: no instalment history yet.
- Payments: no paid instalments, or nothing upcoming once the loan is closed.
- Loan: no balance history, and no statements.
