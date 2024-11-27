import React, { useContext, useEffect, useState } from "react";
import { ExpenseContext } from "../store/ExpenseContext";

const Balance = () => {
  const [balance, setBalance] = useState("0.00");
  const { income, expense } = useContext(ExpenseContext);

  useEffect(() => {
    const newBalance = parseFloat(income) + parseFloat(expense);
    setBalance(newBalance);
  }, [income, expense]);

  return (
    <div className="mt-10">
      <h3 className="text-xl font-medium">Your Balance</h3>
      <h2 className="text-4xl font-semibold">{balance}</h2>
    </div>
  );
};

export default Balance;
