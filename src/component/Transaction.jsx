import React, { useContext } from "react";
import { globalContext } from "../context/GlobalState";

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(globalContext);
  return (
   
      <li className="list">
        {transaction.text}
        <span>{transaction.amount}</span>
        <button
          id="delete-btn"
          onClick={() => deleteTransaction(transaction.id)}
        >
          X
        </button>
      </li>
   
  );
};

export default Transaction;
