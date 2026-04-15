import React from 'react';

export default function FilterToggle({ activeFilter, onToggle }) {
  const isOnlyAvailable = activeFilter === 'available';

  return (
    <button
      onClick={() => onToggle(isOnlyAvailable ? 'all' : 'available')}
      style={{
        padding: '10px 20px',
        borderRadius: '12px',
        fontSize: '14px',
        fontWeight: '600',
        backgroundColor: isOnlyAvailable ? '#00B894' : '#636E72',
        color: 'white',
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
      }}
    >
      <span>{isOnlyAvailable ? '✓' : '👁️'}</span>
      {isOnlyAvailable ? ' Showing available' : ' Show all meals'}
    </button>
  );
}
