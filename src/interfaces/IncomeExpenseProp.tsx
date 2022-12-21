import Account from "./Account";

interface IncomeExpenseProp {
    account: Account;
    setAccount: React.Dispatch<React.SetStateAction<Account>>
    type: string
}

export default IncomeExpenseProp;