import { AccountItem } from "./item";
import { Account } from "../../../types";
import useFetch from "../../hooks/useFetch";
import "./index.css";

export const Accounts = () => {
  const { data } = useFetch<Account[]>("/api/accounts");

  return (
    <>
      <h1 className="align-left">Your accounts</h1>
      <div className="accounts">
        {data?.map((account) => (
          <AccountItem account={account} key={account.account_id} />
        ))}
      </div>
    </>
  );
};
