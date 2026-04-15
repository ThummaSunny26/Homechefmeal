const Header = () => {
  return (
    <header style={{
      background: 'linear-gradient(135deg, #FF6B35 0%, #FF8C42 100%)',
      color: 'white',
      padding: '40px 24px',
      textAlign: 'center',
      boxShadow: '0 10px 15px -3px rgba(255, 107, 53, 0.2)'
    }}>
      <div className="container" style={{ padding: 0 }}>
        <h1 style={{
          fontSize: '44px',
          fontWeight: '800',
          marginBottom: '8px',
          letterSpacing: '-0.03em'
        }}>
          🍽️ READY TO ORDER 
        </h1>
        <p style={{
          fontSize: '18px',
          fontWeight: '500',
          opacity: 0.9,
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          Handcrafted meals from local home chefs, delivered to your door.
        </p>
      </div>
    </header>
  );
};

export default Header;
