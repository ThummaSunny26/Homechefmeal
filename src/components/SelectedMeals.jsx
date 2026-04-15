import React from 'react';

// list of what the user picked
export default function SelectedMeals({ selectedMeals, total, onReset }) {
  const none = !selectedMeals || selectedMeals.length === 0;

  return (
    <section className="card" style={{ padding: '40px', marginBottom: '48px' }}>
      <div className="flex-between" style={{ marginBottom: '32px', flexWrap: 'wrap', gap: '16px' }}>
        <h2 className="font-bold text-primary" style={{ fontSize: '28px' }}>
          🛒 Your Selection Summary
        </h2>
        
        {/* reset button */}
        {!none && (
          <button 
            onClick={onReset}
            className="text-secondary font-semibold"
            style={{ 
              fontSize: '14px', 
              color: '#d63031',
              padding: '10px 20px',
              borderRadius: '12px',
              background: '#fff5f5',
              transition: '0.2s'
            }}
            onMouseOver={(e) => e.currentTarget.style.background = '#ffe5e5'}
            onMouseOut={(e) => e.currentTarget.style.background = '#fff5f5'}
          >
            Clear selection
          </button>
        )}
      </div>

      {none ? (
        <div style={{ 
          textAlign: 'center', 
          padding: '48px 24px', 
          background: '#fafafa', 
          borderRadius: '20px',
          border: '1px solid #eee'
        }}>
          <p className="text-secondary" style={{ fontSize: '16px', fontStyle: 'italic' }}>
            Your plate is empty! Browse our menu and add some delicious meals.
          </p>
        </div>
      ) : (
        <>
          <div style={{ marginBottom: '40px' }}>
            {selectedMeals.map(item => (
              <div 
                key={item.id}
                style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  padding: '20px 0',
                  borderBottom: '1px solid #f3f4f6'
                }}
              >
                <div>
                  <h4 className="font-bold text-primary" style={{ marginBottom: '2px' }}>{item.name}</h4>
                  <span className="text-secondary" style={{ fontSize: '13px' }}>
                    Chef {item.chef}
                  </span>
                </div>
                <span className="font-bold text-primary" style={{ fontSize: '18px' }}>
                  ₹{item.price.toFixed(2)}
                </span>
              </div>
            ))}
          </div>

          <div style={{ 
            background: '#f9fafb', 
            padding: '32px', 
            borderRadius: '20px',
            border: '2px dashed #e5e7eb',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px'
          }}>
            <div>
              <span className="font-bold text-primary" style={{ fontSize: '20px', display: 'block' }}>
                Total Order Amount
              </span>
              <p className="text-secondary" style={{ fontSize: '14px', marginTop: '4px' }}>
                {selectedMeals.length} items selected
              </p>
            </div>
            <div className="font-bold" style={{ fontSize: '40px', color: '#ff6b35', letterSpacing: '-0.02em' }}>
              ₹{total.toFixed(2)}
            </div>
          </div>
        </>
      )}
    </section>
  );
}
