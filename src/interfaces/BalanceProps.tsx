import Account from "./Account";

interface BalanceProps {
    account: Account;
    setAccount: React.Dispatch<React.SetStateAction<Account>>
    balance:  number
}

export default BalanceProps;