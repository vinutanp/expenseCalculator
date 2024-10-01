import React, { createContext, useReducer } from "react";
import Reducer from "./Reducer";

const initialState = {
  transactions: [
    { id: 1, text: "shopping", amount: -2000 },
    { id: 2, text: "grocery", amount: -500 },
    { id: 3, text: "Salary", amount: 26000 },
  ],
};

export const globalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);


  //actions
  function deleteTransaction(id){
    dispatch({
      type:'Delete_Transaction',
      payload:id
    })
  }

  function AddTransaction(transaction){
    dispatch({
      type:'Add_Transaction',
      payload:transaction
    })
  }
  return (
    <globalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction, AddTransaction
      }}
    >
      {children}
    </globalContext.Provider>
  );
};
