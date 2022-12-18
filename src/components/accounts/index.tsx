import { AccountItem } from "./item";
import { Account } from "../../../types";
import useFetch from "../../hooks/useFetch";
import "./index.css";
import StateHandler from "../StateHandler";

export const Accounts = () => {
  const { data, loading, error } = useFetch<Account[]>("/api/accounts");

  return (
    <>
      <h1 className="align-left">Your accounts</h1>
      <StateHandler error={error} loading={loading}>
        <div className="accounts">
          {data?.map((account) => (
            <AccountItem account={account} key={account.account_id} />
          ))}
        </div>
      </StateHandler>
    </>
  );
};
