import { useState } from "react";

import BalanceProps from "../interfaces/BalanceProps";
import currentDate from "./currentDate";

const Balance = (props: BalanceProps) => {
  const [transfer, setTransfer] = useState(0);
  const {account} = props;
  const {setAccount} = props;
  const balance = props.balance;

  const handleSavings = () => {
    if (balance - transfer < 0) {
      console.log("Insufficient funds");
    } else {
      setAccount({
        ...account,
        savings: account.savings + transfer,
        expense: [...account.expense, {date: currentDate(), amount: transfer, label: "transfer to savings"}]
      });
    }
  };
  return (
    <div>
      <div>Current balance: {balance}</div>
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
