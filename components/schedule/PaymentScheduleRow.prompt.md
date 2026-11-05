One instalment as a rounded white card: a date circle, a title and detail, then the amount with a status pill. Stack rows with an 8px gap.
```jsx
<PaymentScheduleRow day="9" month="Dec" title="Instalment 10 of 18" detail="Auto-debit from ••4821" amount={14800} status="upcoming" current />
```
`current` turns the date circle ink and adds an ink outline.
