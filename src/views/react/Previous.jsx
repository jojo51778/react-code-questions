import { useState, useRef, useEffect } from 'react';
function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  },[value])
  return ref.current;
} 
function Previous() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="card">
        <p>count is {count}</p>
        <p>Previous count is {usePrevious(count)}</p>
        <button onClick={() => setCount((count) => count + 1)}>+</button>
      </div>
    </>
  );
}

export default Previous;