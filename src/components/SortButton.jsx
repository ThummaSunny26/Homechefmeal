import React from 'react';

export default function SortButton({ order, onToggle }) {
  const lowToHigh = order === 'asc';

  return (
    <button
      onClick={() => onToggle(lowToHigh ? 'desc' : 'asc')}
      style={{
        padding: '10px 20px',
        borderRadius: '12px',
        fontSize: '14px',
        fontWeight: '600',
        backgroundColor: '#fff',
        color: '#2d3436',
        border: '1px solid #e0e0e0',
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
      }}
    >
      <span>{lowToHigh ? '📉' : '📈'}</span>
      {' Price: ' + (lowToHigh ? 'Low to High' : 'High to Low')}
    </button>
  );
}
