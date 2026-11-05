An iOS-style modal sheet. It slides up from the bottom (480ms, `--cp-ease-sheet`) over a fading scrim, with a grabber handle, and no close button.
You can close it by tapping the scrim, pressing Escape, or dragging the handle down more than 90px.
```jsx
<BottomSheet open={open} onClose={() => setOpen(false)} title="New offer" container={phoneEl}>
  …content…
</BottomSheet>
```
Use it for in-app notifications and short decisions, with at most one primary action. Pass `container` so the sheet stays inside a device frame.
