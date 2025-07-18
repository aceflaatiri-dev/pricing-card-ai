import React from 'react';
import PricingCard from './PricingCard';

function App() {
  return (
    <div style={{minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f8fafc', padding: '20px'}}>
      <PricingCard
        title="Pro Plan"
        price="$30/month"
        features={["Unlimited users", "50GB storage", "Email support"]}
        onClick={() => alert("Pro Plan Selected")}
      />
    </div>
  );
}

export default App;