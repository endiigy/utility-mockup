import { useState } from 'react';
import HomePage from './components/HomePage';
import PaymentPage from './components/PaymentPage';
import './App.css'

function App() {
  const [showPayment, setShowPayment] = useState(false);

  const handleLookup = () => {
    setShowPayment(true);
  };

  return (
    <div className="font-sans">
      {showPayment ? (
        <PaymentPage onBack={() => setShowPayment(false)} />
      ) : (
        <HomePage onLookup={handleLookup} />
      )}
    </div>
  );
}

export default App;