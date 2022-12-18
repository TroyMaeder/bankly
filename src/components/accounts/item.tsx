import type { Account } from "../../../types";
import CURRENCY_SYMBOLS from "../../currency";
import "./index.css";

type Props = {
  account: Account;
};

export const AccountItem = ({ account }: Props) => {
  return (
    <div className="account">
      <div className="total">Total {account.balance.amount.currency}</div>
      <strong>
        {CURRENCY_SYMBOLS[account.balance.amount.currency]}
        {account.balance.amount.value}
      </strong>
    </div>
  );
};
