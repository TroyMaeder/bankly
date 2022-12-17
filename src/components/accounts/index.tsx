import { AccountItem } from "./item";
import { Account } from "../../../types";
import useFetch from "../../hooks/useFetch";
import "./index.css";
import LoadingBoundary from "../loadingBoundary";

export const Accounts = () => {
  const { data, loading } = useFetch<Account[]>("/api/accounts");

  return (
    <>
      <h1 className="align-left">Your accounts</h1>
      <LoadingBoundary loading={loading}>
        <div className="accounts">
          {data?.map((account) => (
            <AccountItem account={account} key={account.account_id} />
          ))}
        </div>
      </LoadingBoundary>
    </>
  );
};
