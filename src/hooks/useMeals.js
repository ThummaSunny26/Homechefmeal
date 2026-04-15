import { useMemo } from 'react';
import useLocalStorage from './useLocalStorage.js';
import MEALS_DATA from '../data/meals.js';

export default function useMeals() {
  const [filter, setFilter] = useLocalStorage('raiqa_filter', 'available');
  const [sort, setSort] = useLocalStorage('raiqa_sort', 'asc');

  // find cheapest and priciest for highlights
  const extremes = useMemo(() => {
    const avail = MEALS_DATA.filter(m => m.isAvailable);
    if (!avail.length) return {};
    
    const sorted = [...avail].sort((a, b) => a.price - b.price);
    return {
      min: sorted[0].id,
      max: sorted[sorted.length - 1].id
    };
  }, []);

  // filter and sort the main list
  const list = useMemo(() => {
    let result = filter === 'available' 
      ? MEALS_DATA.filter(m => m.isAvailable) 
      : [...MEALS_DATA];

    result.sort((a, b) => {
      return sort === 'asc' ? a.price - b.price : b.price - a.price;
    });

    return result;
  }, [filter, sort]);

  return {
    processedMeals: list,
    filter,
    setFilter,
    sortOrder: sort,
    setSortOrder: setSort,
    mostExpensiveId: extremes.max,
    leastExpensiveId: extremes.min
  };
}
