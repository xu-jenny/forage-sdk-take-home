import React from 'react';
import './App.css';

import FormInput from './components/FormInput';
import PaymentResponseTable from './components/PaymentResponse';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FormInput />
        <br />
        <PaymentResponseTable />
      </header>
    </div>
  );
}

export default App;
