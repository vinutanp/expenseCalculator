import React, { useState } from 'react'
import { useContext } from 'react';
import { globalContext } from '../context/GlobalState';

const AddNewTransaction = () => {
    const [text, setText]=useState('');
    const [amount, setAmount] = useState(0);

    const {AddTransaction} =useContext(globalContext);
    const onSubmit = e =>{
        e.preventDefault();

        const newTransaction={
          id:Math.floor(Math.random()),
          text,
         amount: +amount
        }
        AddTransaction(newTransaction);
        
    }
  return (
    <div>
      <h3>Add Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-field">
        <label htmlFor='text'>Text</label>
        <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder='Enter Text....'/><br/>
        </div>
        <div className="form-field">
        <label htmlFor='amount'>Amount</label>
        <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder='Enter amount....'/><br/>
        </div>
        <button className='submitBtn'>Add Transaction</button>
      </form>
    </div>
  )
}

export default AddNewTransaction;
