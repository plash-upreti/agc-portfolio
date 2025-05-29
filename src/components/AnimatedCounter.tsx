import { useState, useEffect } from 'react';

interface AnimatedCounterProps {
  value: number;
  duration?: number;
}

const AnimatedCounter = ({ value, duration = 2000 }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let start = 0;
    const end = value;
    
    // If zero, return early
    if (start === end) return;
    
    const incrementTime = (duration / end) * 1.1;
    let timer: number;
    
    // Timer to count up to the value
    const run = () => {
      timer = window.setTimeout(() => {
        start += 1;
        setCount(start);
        if (start < end) {
          run();
        }
      }, incrementTime);
    };
    
    run();
    
    // Cleanup
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [value, duration]);
  
  return <span>{count}</span>;
};

export default AnimatedCounter;