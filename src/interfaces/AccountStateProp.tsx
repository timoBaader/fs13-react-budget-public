import Account from "./Account";

interface AccountStateProp {
    account: Account;
    setAccount: React.Dispatch<React.SetStateAction<Account>>
}

export default AccountStateProp;