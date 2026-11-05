A pill toggle between two to four views. An ink indicator slides under the selected option, and the slide follows RTL.
```jsx
<SegmentedControl value={tab} onChange={setTab} options={[{value:'schedule',label:'Schedule'},{value:'statements',label:'Statements'}]} />
```
On dark surfaces, `tone="dark"` gives a mint indicator.
