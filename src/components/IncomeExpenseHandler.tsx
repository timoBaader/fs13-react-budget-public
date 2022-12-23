import { useState } from "react";
import TextField from '@mui/material/TextField';

import IncomeExpenseArray from "../interfaces/IncomeExpenseArray";
import IncomeExpenseProps from "../interfaces/IncomeExpenseProps";
import currentDate from "./currentDate";

const IncomeExpenseHandler = ({ setAccount, account, type, balance}: IncomeExpenseProps) => {
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState("");
  const [label, setLabel] = useState("missing Label")

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const element: IncomeExpenseArray = {
      date: date,
      amount: amount,
      label: label
    }
    if(!date) element.date = currentDate();
    if (type === "income"){
      console.log("INCOME")
      setAccount({ ...account, income: [...account.income, element]});
      return;
    }
    if (type === "expense")
    console.log("expense");
      if(balance - amount < 0) {
        console.log("insufficient funds")
        return;
      }else {
      setAccount({ ...account, expense: [...account.expense, element]});
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={type}>Amount of {type}</label>
      <input
        type="text"
        id={type}
        name={type}
        value={amount}
        onChange={(e) => setAmount(parseInt(e.target.value))}
      />
    <TextField
        id="date"
        label="date"
        type="date"
        onChange={(e) => setDate(e.target.value)}
        sx={{ width: 220 }}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="label"
        label="info"
        type="text"
        onChange={(e) => setLabel(e.target.value)}
        sx={{ width: 220 }}
        InputLabelProps={{
          shrink: true,
        }}
      />

      <button type="submit">Add {type}</button>
    </form>
  );
};

export default IncomeExpenseHandler;
