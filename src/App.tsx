import { useEffect, useState } from "react";

import "./App.css";
import IncomeExpenseHandler from "./components/IncomeExpenseHandler";
import Balance from "./components/Balance";
import Savings from "./components/Savings";
import Account from "./interfaces/Account";
import DisplayTransfers from "./components/DisplayTransfers";

function App() {

  const [account, setAccount] = useState<Account>({
    income: [],
    expense: [],
    savings: 0
  });

  const [balance, setBalance] = useState<number>(0);

  useEffect(()=> {
    setBalance(account.income.reduce((result, current) => result + current.amount, 0) - account.expense.reduce((result, current) => result + current.amount, 0))
  },[account])

  return (
    <div className="App">
      <IncomeExpenseHandler
        type="income"
        setAccount={setAccount}
        account={account}
        balance={balance}
      ></IncomeExpenseHandler>
      <IncomeExpenseHandler
        type="expense"
        setAccount={setAccount}
        account={account}
        balance={balance}
      ></IncomeExpenseHandler>
      <Balance setAccount={setAccount} account={account} balance={balance}></Balance>
      <Savings account={account}></Savings>
      <DisplayTransfers account={account} type="income"></DisplayTransfers>
      <DisplayTransfers account={account} type="expense"></DisplayTransfers>
    </div>
  );
}

export default App;
