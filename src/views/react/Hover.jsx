import { useState, useCallback, useRef} from 'react';

function useHover() {
  const ref = useRef();
  const [isHover, setHover] = useState(false);
  const handleMouseEnter = useCallback(() => setHover(true), []);
  const handleMouseLeave = useCallback(() => setHover(false), []);
  const callbackRef = useCallback(node => {
    if (ref.current) {
      ref.current.removeEventListener('mouseenter', handleMouseEnter);
      ref.current.removeEventListener('mouseleave', handleMouseLeave);
    }
    ref.current = node;
    ref.current.addEventListener('mouseenter', handleMouseEnter);
    ref.current.addEventListener('mouseleave', handleMouseLeave);
  },[handleMouseEnter, handleMouseLeave]);
  return [callbackRef, isHover]
}

function Hover() {
  const [ref, isHovered] = useHover()
  return (
    <>
      <button id='hovered'  ref={ref}>{isHovered ? 'hovered' : 'not hovered'}</button>
    </>
  );
}

export default Hover;