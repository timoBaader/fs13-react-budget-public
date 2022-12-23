import { useState } from "react";

import AccountStateProp from "../interfaces/AccountStateProp";
import currentDate from "./currentDate";

const Balance = (props: AccountStateProp) => {
  const [transfer, setTransfer] = useState(0);
  const {account} = props;
  const {setAccount} = props;

  const calcBalance = (): number => {
    const balance = account.income.reduce((result, current) => result + current.amount, 0) - account.expense.reduce((result, current) => result + current.amount, 0)
    console.log(balance);
    return balance
  }

  const handleSavings = () => {
    if (calcBalance() - transfer < 0) {
      console.log("Insufficient funds");
    } else {
      setAccount({
        ...account,
        savings: account.savings + transfer,
        expense: [...account.expense, {date: currentDate.toString(), amount: transfer, label: "transfer to savings"}]
      });
    }
  };
  return (
    <div>
      <div>Current balance: {calcBalance()}</div>
      <label htmlFor="transfer">Transfer to savings account</label>
      <input
        type="text"
        id="transfer"
        value={transfer}
        onChange={(e) => setTransfer(parseInt(e.target.value))}
      />
      <button onClick={handleSavings}>Transfer</button>
    </div>
  );
};

export default Balance;
