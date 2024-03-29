import { useRef, useState } from 'react';
function useIsFirstRender() {
  const isFirstRender = useRef(true);

  if (isFirstRender.current) {
    isFirstRender.current = false;
    return true
  }

  return false;
}
// test
function FirstRender() {
  const [clicked, setClicked] = useState(1)
  return <div>
    <button onClick={() => setClicked(prev => prev + 1)}>
      clicked {clicked} times
    </button> 
    <h3>{useIsFirstRender() ? 'First Render!' : `${clicked}th Render` }</h3>
  </div>
}

export default FirstRender;
