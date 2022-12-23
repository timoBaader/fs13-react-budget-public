import Account from "./Account";

interface IncomeExpenseProps {
    account: Account;
    setAccount: React.Dispatch<React.SetStateAction<Account>>
    type: string
    balance:  number
}

export default IncomeExpenseProps;