import { useState } from "react";

const Balance = ({ setAccount, account }) => {
  const [transfer, setTransfer] = useState(0);
  const handleSavings = () => {
    if (account.income - account.expense - transfer < 0) {
      console.log("Insufficient funds");
    } else {
      setAccount({
        ...account,
        savings: transfer,
        income: account.income - transfer,
      });
    }
  };
  return (
    <div>
      <div>Current balance: {account.income - account.expense}</div>
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
