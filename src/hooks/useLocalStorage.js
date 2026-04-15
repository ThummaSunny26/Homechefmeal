import { useState, useEffect } from 'react';

// small hook to keep things in localStorage so they don't vanish on refresh
function useLocalStorage(key, initialValue) {
  const [val, setVal] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      // parse it if it's there, otherwise just use the default
      return item ? JSON.parse(item) : initialValue;
    } catch (err) {
      console.log('ls error:', err);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(val));
    } catch (err) {
      // maybe storage is full? 
      console.warn('could not save:', key);
    }
  }, [key, val]);

  return [val, setVal];
}

export default useLocalStorage;
