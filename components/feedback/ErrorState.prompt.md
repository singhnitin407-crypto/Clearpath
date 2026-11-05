ErrorState covers failures and blocked states. It shows a ringed icon disc in the tone colour, a title, a one-line explanation, optional fact rows, a primary recovery action, a secondary escape and a small support code.
```jsx
<ErrorState compact tone="danger" icon="circle-x" title="Payment didn't go through"
  details={[['Amount', <Money amount={14800} size="sm" />], ['Money debited', 'No']]}
  actionLabel="Try again" onAction={retry} secondaryLabel="Use another account" code="Ref CP-PAY-58213">
  Your bank declined this payment. No money has left your account.
</ErrorState>
```
Rules:
- Always say whether money moved.
- Never ask the user to pay again while a payment status is unknown. Use `tone="warning"` with a "pending" message instead.
- Red (`danger`) is only for failed money actions. Use `neutral` for connectivity and server problems, and `info` for security.
- Give a reason only when it's known. Otherwise say "Something went wrong on our side".

**OfflineBar** is a dark pill shown at the top of a screen while it shows cached data. It has an optional Retry button.
