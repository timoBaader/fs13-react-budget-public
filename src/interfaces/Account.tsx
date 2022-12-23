import IncomeExpenseArray from "./IncomeExpenseArray";

interface Account {
    income: Array<IncomeExpenseArray>,
    expense: Array<IncomeExpenseArray>,
    savings: number,
    balance: number,
}

export default Account;