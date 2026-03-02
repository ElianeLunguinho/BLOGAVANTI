import { useState, useEffect } from 'react';

/**
 * Returns a debounced value that only changes after the specified delay.
 * Useful for delaying expensive computations (e.g. filtering) until the
 * user has stopped typing.
 *
 * @param value the input value
 * @param delay milliseconds to wait before updating the debounced value
 */
export function useDebounce(value, delay = 300) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounced(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debounced;
}
