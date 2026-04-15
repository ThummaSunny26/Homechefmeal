import React from 'react';
import MealCard from './MealCard.jsx';

export default function MealList({
  meals,
  selectedMeals,
  onAddMeal,
  mostExpensiveId,
  leastExpensiveId
}) {
  // if no results (maybe filter killed everything)
  if (!meals || meals.length === 0) {
    return (
      <div className="card" style={{ 
        textAlign: 'center', 
        padding: '80px 32px',
        border: '1px dashed #ccc',
        background: '#fafafa'
      }}>
        <div style={{ fontSize: '48px', marginBottom: '16px' }}>👩‍🍳</div>
        <h3 className="font-bold text-primary" style={{ fontSize: '20px', marginBottom: '8px' }}>
          No meals found
        </h3>
        <p className="text-secondary" style={{ maxWidth: '300px', margin: '0 auto' }}>
          Try adjusting your filters or checking back later.
        </p>
      </div>
    );
  }

  return (
    <section style={{ marginBottom: '64px' }}>
      <div className="grid-meals">
        {meals.map(m => (
          <MealCard
            key={m.id}
            meal={m}
            isSelected={selectedMeals.includes(m.id)}
            onAdd={onAddMeal}
            isMostExpensive={m.id === mostExpensiveId}
            isLeastExpensive={m.id === leastExpensiveId}
          />
        ))}
      </div>
    </section>
  );
}
