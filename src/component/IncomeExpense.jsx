import React, { useContext } from 'react'
import { globalContext } from '../context/GlobalState'

const IncomeExpense = () => {
  const {transactions}=useContext(globalContext)

  const amounts=transactions.map(transaction=>transaction.amount);

  const income=amounts
  .filter(amt=>amt>0)
  .reduce((acc,amt)=>(acc+=amt),0)

  const expense=amounts
  .filter(amt=>amt<0)
  .reduce((acc,amt)=>(acc+=amt),0)

  return (
    <>
    <div className='details'>
        
      <h4>Income</h4>
      <h4 className='credit'>₹{income}</h4>
      </div>
      <div className='details'>
      <h4>Expense</h4>
      <h4 className='debit'> ₹{expense}</h4>
      
      </div>
      </>
  )
}

export default IncomeExpense
