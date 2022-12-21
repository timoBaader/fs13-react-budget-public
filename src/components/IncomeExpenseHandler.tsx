import { useState } from "react";
import TextField from '@mui/material/TextField';

import IncomeExpenseProp from "../interfaces/IncomeExpenseProp";

const IncomeExpenseHandler = ({ setAccount, account, type}: IncomeExpenseProp) => {
  const [data, setData] = useState(0);
  const [value, setValue] = useState("");

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (type === "income")
      setAccount({ ...account, income: account.income + data });
    if (type === "expense")
      setAccount({ ...account, expense: account.expense + data });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={type}>Amount of {type}</label>
      <input
        type="text"
        id={type}
        name={type}
        value={data}
        onChange={(e) => setData(parseInt(e.target.value))}
      />
    <TextField
        id="date"
        label="date"
        type="date"
        defaultValue="2017-05-24"
        onChange={(e) => setValue(e.target.value)}
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
