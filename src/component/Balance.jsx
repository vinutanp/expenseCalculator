import React, { useContext } from "react";
import { globalContext } from "../context/GlobalState";

const Balance = () => {
  const {transactions}=useContext(globalContext);

  const amounts=transactions.map(transaction=>transaction.amount);
  console.log(amounts)
  const total=amounts.reduce((acc,item)=>acc+=item,0);
  return (
    <div className="details">
      <h4>Your Balance</h4>
      <h4 id="balance"> ₹{total}</h4>
    </div>
  );
};

export default Balance;
