```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect: The return value of a useEffect callback should be a cleanup function
    // that returns a function to be called when the component unmounts or when the effect
    // re-runs (to clean up the previous effect).
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => {
        // ...
      });
  }, []);

  return (
    <div>Count: {count}</div>
  );
}
```