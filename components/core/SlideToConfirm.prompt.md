A slide-to-pay control: a 64px ink pill with a mint knob. Drag the knob past 82% to confirm, otherwise it springs back. Tap and Enter also confirm, for accessibility.
```jsx
<SlideToConfirm label="Pay with Face ID" onConfirm={pay} />
```
Use it only for the final, irreversible money action at the bottom of a payment sheet. In RTL the knob travels right to left.
