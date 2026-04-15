import React, { useMemo } from 'react';
import Header from './components/Header.jsx';
import MealList from './components/MealList.jsx';
import SelectedMeals from './components/SelectedMeals.jsx';
import FilterToggle from './components/FilterToggle.jsx';
import SortButton from './components/SortButton.jsx';
import useCart from './hooks/useCart.js';
import useMeals from './hooks/useMeals.js';

// main component
export default function App() {
  const { cart, addToCart, resetCart } = useCart();
  const { 
    processedMeals, 
    filter, 
    setFilter, 
    sortOrder, 
    setSortOrder, 
    mostExpensiveId, 
    leastExpensiveId 
  } = useMeals();

  // combine everything for the summary
  const summary = useMemo(() => {
    const list = processedMeals.filter(m => cart.includes(m.id));
    const total = list.reduce((sum, item) => sum + item.price, 0);
    return { total, list };
  }, [cart, processedMeals]);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />

      <main className="container" style={{ flexGrow: 1 }}>
        <section className="flex-between" style={{ marginBottom: '40px', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <h2 className="font-bold text-primary" style={{ fontSize: '24px', marginBottom: '4px' }}>
              Explore Local Flavors
            </h2>
            <p className="text-secondary" style={{ fontSize: '14px' }}>
              Browse handcrafted meals from our community chefs.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <FilterToggle activeFilter={filter} onToggle={setFilter} />
            <SortButton order={sortOrder} onToggle={setSortOrder} />
          </div>
        </section>

        <MealList
          meals={processedMeals}
          selectedMeals={cart}
          onAddMeal={addToCart}
          mostExpensiveId={mostExpensiveId}
          leastExpensiveId={leastExpensiveId}
        />

        <SelectedMeals
          selectedMeals={summary.list}
          total={summary.total}
          onReset={resetCart}
        />
      </main>

      <footer style={{ 
        textAlign: 'center', 
        padding: '48px 24px', 
        marginTop: '80px', 
        borderTop: '1px solid #eee',
        backgroundColor: '#fff'
      }}>
        <div className="container">
          <p className="text-secondary" style={{ fontSize: '14px', marginBottom: '8px' }}>
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
          <p className="text-secondary" style={{ fontSize: '12px', opacity: 0.6 }}>
            Made with love for the local food community.
          </p>
        </div>
      </footer>
    </div>
  );
}
