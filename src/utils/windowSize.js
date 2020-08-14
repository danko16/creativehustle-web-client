import { useLayoutEffect, useState } from 'react';

export function useWindowSize(minSize) {
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });
  useLayoutEffect(() => {
    function updateSize() {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  if (size.width > minSize) {
    return true;
  } else {
    return false;
  }
}
