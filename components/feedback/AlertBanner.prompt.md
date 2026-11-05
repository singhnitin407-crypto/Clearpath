A rounded banner with an icon circle. Info is a white card, warning is amber, and action required is an ink card with a full-width mint button. It fades and rises in on mount.
```jsx
<AlertBanner variant="action" title="Your 9 November instalment is overdue" actionLabel="Pay AED 14,800">Late fee is capped at AED 200.</AlertBanner>
```
Action required is a compact urgent strip: a soft red tint, a solid red alert disc, an ink title and a deep-red body. Keep the copy factual with a capped cost. The pay button lives on the loan card, not in the strip.

**offer** is a compact coupon, 88px tall: an amber percentage stub, a perforated divider, the offer title, and an inline net AED saving line. The whole right side is the tap target. Always show the net AED saving; never the percentage alone.
```jsx
<AlertBanner variant="offer" badge="Limited offer · ends 30 Sept" highlightPrefix="Save" highlight="2.1%" title="Settle your loan early" actionLabel="See your saving" onAction={open}
  saving={<><span>Net saving</span><Money amount={1465} size="sm" tone="saving" /><span>after 1% fee</span></>} />
```
