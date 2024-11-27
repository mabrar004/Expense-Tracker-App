import "./App.css";
import AppName from "./component/AppName";
import Balance from "./component/Balance";
import IncomeExpense from "./component/IncomeExpense";
import History from "./component/History";
import NewTransaction from "./component/NewTransaction";
import { ExpenseContextProvider } from "./store/ExpenseContext";

function App() {
  return (
    <ExpenseContextProvider>
      <div className="flex flex-col mx-28 my-10   max-w-96">
        <AppName />
        <Balance />
        <IncomeExpense />
        <History />
        <NewTransaction />
      </div>
    </ExpenseContextProvider>
  );
}

export default App;
