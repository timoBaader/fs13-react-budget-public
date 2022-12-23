import { useState } from "react";

import "./App.css";
import IncomeExpenseHandler from "./components/IncomeExpenseHandler";
import Balance from "./components/Balance";
import Savings from "./components/Savings";
import Account from "./interfaces/Account";

function App() {

  const [account, setAccount] = useState<Account>({
    income: [],
    expense: [],
    savings: 0,
    balance: 0,
  });

  // const calcBalance = (): number => {
  //   const balance = account.income.reduce((result, current) => result + current.amount, 0) - account.expense.reduce((result, current) => result + current.amount, 0)
  //   console.log(balance);
  //   return balance
  // }

  return (
    <div className="App">
      <IncomeExpenseHandler
        type="income"
        setAccount={setAccount}
        account={account}
      ></IncomeExpenseHandler>
      <IncomeExpenseHandler
        type="expense"
        setAccount={setAccount}
        account={account}
      ></IncomeExpenseHandler>
      <Balance setAccount={setAccount} account={account}></Balance>
      <Savings account={account}></Savings>
    </div>
  );
}

export default App;
