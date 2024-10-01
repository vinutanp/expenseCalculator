import React, { useContext } from "react";
import { globalContext } from "../context/GlobalState";

const Balance = () => {
  const {transactions}=useContext(globalContext);

  const amounts=transactions.map(transaction=>transaction.amount);
  console.log(amounts)
  const total=amounts.reduce((acc,item)=>acc+=item,0);
  return (
    <div className="container">
      <h2>Your Balance</h2>
      <h1 id="balance"> Rs.{total}</h1>
    </div>
  );
};

export default Balance;
