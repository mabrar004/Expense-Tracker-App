import React, { createContext, useState } from "react";

export const ExpenseContext = createContext({
  items: [],
  handleDeleteItem: () => {},
  text: "",
  setText: () => {},
  amount: "",
  setAmount: () => {},
  income: 0.0,
  setIncome: () => {},
  expense: 0.0,
  setExpense: () => {},
  onAddItems: () => {},
});

export const ExpenseContextProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");
  const [income, setIncome] = useState("0.00");
  const [expense, setExpense] = useState("0.00");
  const [amount, setAmount] = useState("");

  // Add Items function
  const onAddItems = (textVal, amountVal) => {
    if (!(textVal && amountVal)) return;
    let newItems = [...items, { text: textVal, amount: parseFloat(amountVal) }];
    setItems(newItems);
    if (amountVal > 0) {
      setIncome((prevIncome) => parseFloat(prevIncome) + parseFloat(amountVal));
    } else {
      setExpense(
        (prevExpense) => parseFloat(prevExpense) + parseFloat(amountVal)
      );
    }
  };

  // Delete Items Function
  const handleDeleteItem = (textVal) => {
    const remainingItems = items.filter((item) => item.text !== textVal);
    console.log("remainging items are " + remainingItems);
    const deletedItem = items.find((item) => item.text === textVal);
    console.log("deleted items are " + deletedItem);

    if (deletedItem) {
      if (deletedItem.amount > 0) {
        setIncome((prevIncome) => prevIncome - deletedItem.amount);
      } else {
        setExpense((prevExpense) => prevExpense - deletedItem.amount);
      }
    }
    setItems(remainingItems);
  };

  return (
    <ExpenseContext.Provider
      value={{
        items,
        handleDeleteItem,
        text,
        setText,
        amount,
        setAmount,
        income,
        setIncome,
        expense,
        setExpense,
        onAddItems,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
};
