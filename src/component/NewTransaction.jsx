import React, { useContext, useState } from "react";
import { ExpenseContext } from "../store/ExpenseContext";

const NewTransaction = () => {
  const { text, setText, amount, setAmount, onAddItems } =
    useContext(ExpenseContext);
  //   HANDLE TEXT
  const handleText = (event) => {
    setText(event.target.value);
  };
  //   HANDLE AMOUNT
  const handleAmount = (event) => {
    setAmount(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItems(text, amount);
    setText("");
    setAmount("");
  };
  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="my-10">
          <div>
            <h1 className="text-2xl font-semibold">Add New Transaction</h1>
            <hr className="border-gray-300 my-4 w-80" />
          </div>
          <div className="input-fiedls my-5">
            <label htmlFor="text" className="text-xl block">
              Text
            </label>
            <input
              type="text"
              value={text}
              name="text"
              placeholder="Enter text..."
              className="border border-gray-300 rounded focus:ring-2 py-2 my-2 w-80 px-2"
              onChange={(event) => handleText(event)}
            />

            <label htmlFor="amount" className="text-xl block">
              Amount
            </label>
            <span>(negative - expense, positive - income)</span>
            <input
              type="number"
              name="amount"
              value={amount}
              placeholder="Enter amount..."
              className="border border-gray-300 rounded focus:ring-2 py-2 my-2 w-80 px-2"
              onChange={(event) => handleAmount(event)}
            />
            <button
              type="submit"
              className="w-80 font-semibold bg-purple-500 text-white py-2 my-1 hover:opacity-90"
            >
              Add Transaction
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default NewTransaction;
