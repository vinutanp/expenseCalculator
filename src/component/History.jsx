import React, { useContext } from "react";
import { globalContext } from "../context/GlobalState";
import Transaction from "./Transaction";

const History = () => {
  const {transactions}=useContext(globalContext)
  return (
    <div>
      <h4>Transaction History</h4>
      <ul className="list-group">
        {transactions.map(transaction=>(
 <Transaction key={transaction.id} transaction={transaction}/>       ))

        }
       
      </ul>
      
    </div>
  );
};

export default History;
