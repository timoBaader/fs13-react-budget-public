import Account from "./Account";

interface AccountProp {
    account: Account;
    handleChange: (account: Account) => void;
}

export default AccountProp;