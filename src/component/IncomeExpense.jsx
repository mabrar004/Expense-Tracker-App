import React, { useContext } from "react";
import { ExpenseContext } from "../store/ExpenseContext";

const IncomeExpense = () => {
  const { income, expense } = useContext(ExpenseContext);
  console.log(`income is ${income} and expense is ${expense}`);
  return (
    <div className=" max-w-72 container border border-gray-200 max-h-32 my-10">
      <div className="flex flex-row items-center justify-center align-middle text-center font-semibold   text-xl my-8">
        <div className=" mx-10 ">
          <h3>Income</h3>
          <h3 className="text-green-700  ">{income}</h3>
        </div>
        <div className=" mx-10">
          <h3>Expense</h3>
          <h3 className="text-red-800">{expense}</h3>
        </div>
      </div>
    </div>
  );
};

export default IncomeExpense;
