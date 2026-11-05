One row in the in-app notification inbox. It shows a tinted icon circle, a title with a time, a body clamped to two lines, and a teal dot when unread. Unread rows get a faint fill and a semibold title.
```jsx
<NotificationItem tone="offer" icon="badge-percent" title="You've received a 2.1% off offer" body="Pay before 30 September and save 2.1%." time="Today, 9:41" unread onClick={open} />
```
Group rows under "New" and "Earlier" inside a BottomSheet. Tapping a row opens its detail in the same sheet and marks it read.
