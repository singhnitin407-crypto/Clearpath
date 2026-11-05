Instalment history as one white card listing entries newest first, divided by hairlines. Each row has a tinted status icon (check for paid, alert for overdue, clock for upcoming), a title (15/500) and meta (12.5 secondary), and ends with the amount (16/600) and a coloured status word (12/500). The header is text only: an 18/600 title and a 13 secondary summary, with an optional action.
```jsx
<InstalmentTimeline title="Instalment history" summary="9 of 18 paid · AED 133,200" action={<Button variant="ghost" size="sm">See all</Button>}
  items={[{ title: 'Instalment 9', meta: 'Paid 9 Nov · ••4821', amount: 14800, status: 'paid' }]} statusLabels={{ paid: 'Paid' }} />
```
Show the last 4 entries on Home. Put the full list on the Payments tab.
