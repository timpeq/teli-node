import Account from "./account.ts";
export default interface BalanceDetail {
    total: number;
    available: number;
    accounts: Array<Account>
}