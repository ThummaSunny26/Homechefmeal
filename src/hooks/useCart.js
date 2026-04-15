import { useCallback } from 'react';
import useLocalStorage from './useLocalStorage.js';

export default function useCart() {
  const [items, setItems] = useLocalStorage('raiqa_cart', []);

  // helper to add to list
  const add = useCallback((id) => {
    setItems((prev) => {
      if (prev.includes(id)) {
        console.log('already got this one:', id);
        return prev;
      }
      return [...prev, id];
    });
  }, [setItems]);

  const clear = useCallback(() => {
    if (confirm('Wipe the cart?')) {
      setItems([]);
    }
  }, [setItems]);

  return {
    cart: items,
    addToCart: add,
    resetCart: clear,
    count: items.length
  };
}
