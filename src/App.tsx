import { useEffect, useState } from "react";

import "./App.css";
import IncomeExpenseHandler from "./components/IncomeExpenseHandler";
import Balance from "./components/Balance";
import Savings from "./components/Savings";
import Account from "./interfaces/Account";

function App() {
  const [account, setAccount] = useState<Account>({
    income: 0,
    expense: 0,
    savings: 0,
    balance: 0,
  });

  function handleChange(account: Account): void {
    setAccount(account);
  }

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
      <Savings handleChange={handleChange} account={account}></Savings>
    </div>
  );
}

export default App;