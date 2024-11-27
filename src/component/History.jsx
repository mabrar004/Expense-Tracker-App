import React, { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { ExpenseContext } from "../store/ExpenseContext";

const History = () => {
  const { items, handleDeleteItem } = useContext(ExpenseContext);
  return (
    <>
      <div>
        <h1 className="text-2xl font-semibold">History</h1>
        <hr className=" block border-gray-300 my-4 w-80  " />
      </div>
      {items.map((item, index) => {
        const { text, amount } = item;
        return (
          <div
            className="flex justify-between items-center w-80 py-2 px-2 my-1 border border-gray-300 "
            key={index}
          >
            <h2>{text}</h2>
            <h2>{amount > 0 ? `+ ${amount}` : `${amount}`}</h2>
            <button
              className="cursor-pointer text-xl"
              onClick={() => handleDeleteItem(text)}
            >
              <MdDelete />
            </button>
          </div>
        );
      })}
    </>
  );
};

export default History;
