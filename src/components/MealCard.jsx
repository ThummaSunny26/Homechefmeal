import React from 'react';

// single item card
export default function MealCard({ 
  meal, 
  isSelected, 
  onAdd, 
  isMostExpensive, 
  isLeastExpensive 
}) {
  const { name, chef, description, price, isAvailable } = meal;

  const handleAdd = () => {
    // only add if it's actually in stock and not already there
    if (isAvailable && !isSelected) {
      onAdd(meal.id);
    }
  };

  // dynamic border color
  let borderColor = '#E0E0E0';
  if (isMostExpensive) borderColor = '#FDCB6E';
  if (isLeastExpensive) borderColor = '#74B9FF';

  return (
    <div
      className="card meal-card"
      style={{
        border: `4px solid ${borderColor}`,
        opacity: isAvailable ? 1 : 0.6,
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div style={{ position: 'absolute', top: '12px', right: '12px', display: 'flex', gap: '8px' }}>
        {isMostExpensive && <span className="badge badge-expensive">Premium</span>}
        {isLeastExpensive && <span className="badge badge-cheap">Best Value</span>}
      </div>

      <div style={{ marginBottom: '16px', paddingRight: (isMostExpensive || isLeastExpensive) ? '90px' : '0' }}>
        <h3 className="font-bold text-primary" style={{ fontSize: '20px', marginBottom: '4px' }}>
          {name}
        </h3>
        <p className="text-secondary font-semibold" style={{ fontSize: '14px' }}>
          By Chef {chef}
        </p>
      </div>

      <p className="text-secondary" style={{ fontSize: '15px', marginBottom: '24px', flexGrow: 1 }}>
        {description}
      </p>

      <div className="flex-between" style={{ marginBottom: '20px' }}>
        <span className="font-bold text-primary" style={{ fontSize: '26px' }}>
          ₹{price}
        </span>

        <span className={`badge ${isAvailable ? 'badge-available' : 'badge-unavailable'}`}>
          {isAvailable ? 'In Stock' : 'Sold Out'}
        </span>
      </div>

      <button
        onClick={handleAdd}
        disabled={isSelected || !isAvailable}
        className={isSelected ? '' : 'pulse'}
        style={{
          width: '100%',
          padding: '14px 20px',
          borderRadius: '12px',
          fontSize: '16px',
          fontWeight: '700',
          background: isSelected ? '#ccc' : !isAvailable ? '#eee' : '#FF6B35',
          color: 'white'
        }}
      >
        {isSelected ? '✓ Added' : isAvailable ? 'Add to selection' : 'Out of stock'}
      </button>
    </div>
  );
}
