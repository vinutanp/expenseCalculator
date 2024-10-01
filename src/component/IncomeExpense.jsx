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
    <div className='Income-expense'>
        <div >
      <h4>Income</h4>
      <p className='credit'>Rs.{income}</p>
      </div>
      <div >
      <h4>Expense</h4>
      <p className='debit'>Rs.{expense}</p>
      </div>
    </div>
  )
}

export default IncomeExpense
