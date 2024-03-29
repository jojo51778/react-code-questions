import { useEffect, useRef, useState } from "react";

function useTimeout(callback, deley) {
  const callbackRef = useRef(callback);
  callbackRef.current = callback;
  useEffect(() => {
    // callbackRef.current is to keep callback up to date
    // When to use refs: https://react.dev/learn/referencing-values-with-refs#when-to-use-refs
    const handler = setTimeout(() => callbackRef.current(), deley);
    return () => {
      clearTimeout(handler);
    };
  }, [deley]);

  return callbackRef.current;
}

// test
export default function Timeout() {
	const [value, setValue] = useState(0);

  useEffect(() => {
    setValue(8);
  }, []);

  useTimeout(() => {
    // if callbackRef.current is callback，log data is 0
    console.log(value);
  }, 1000);
  useTimeout(() => {
    console.log(2);
  }, 1000);
  useTimeout(() => {
    console.log(3);
  }, 100);
  useTimeout(() => {
    // log 3 8 2 4
    console.log(4);
  }, 2000);

  return (
    <div className="App">
      <p>Value: {value}</p>
      <button onClick={() => setValue(value + 1)}>Click Me</button>
    </div>
  );
  }