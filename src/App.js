import Heading from './component/Heading';
import Balance from './component/Balance';
import IncomeExpense from './component/IncomeExpense';
import './App.css';
import History from './component/History';
import AddNewTransaction from './component/AddNewTransaction';
import { GlobalProvider } from './context/GlobalState';
import React from 'react';

function App() {
  return (
    <GlobalProvider>
      <div className='container'>
        <div className='centered-content'>
          <Heading />
          <Balance />
          <IncomeExpense />
          <History/>
          <AddNewTransaction />  </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
