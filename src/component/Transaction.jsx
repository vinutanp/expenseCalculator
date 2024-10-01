import React, { useContext } from "react";
import { globalContext } from "../context/GlobalState";

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(globalContext);
  return (
    <div>
      <li className="list">
        {transaction.text}
        <span>{transaction.amount}</span>
        <button
          className="delete-btn"
          onClick={() => deleteTransaction(transaction.id)}
        >
          X
        </button>
      </li>
    </div>
  );
};

export default Transaction;
