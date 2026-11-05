A rounded bar chart with one highlighted bar and a tooltip bubble. Tap a bar to move the highlight. Bars grow on mount.
```jsx
<BarChart title="Balance over time" value={133200} valueCurrency="AED" data={[{label:'Mar',value:251600},{label:'Apr',value:236800}]} formatValue={v=>(v/1000).toFixed(1)+'k'} />
```
The time axis stays left-to-right in RTL. Use `tone="dark"` for an ink analytics card.
