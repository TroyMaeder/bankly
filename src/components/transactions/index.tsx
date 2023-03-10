import * as Tabs from "@radix-ui/react-tabs";
import { Transaction as TransactionType } from "../../../types";
import useFetch from "../../hooks/useFetch";
import StateHandler from "../StateHandler";
import "./index.css";
import { Transaction } from "./item";

const isExpense = (transaction: TransactionType) =>
  transaction.amount.value < 0;
const isIncome = (transaction: TransactionType) => transaction.amount.value > 0;

const Expenses: React.FC<{ transactions: TransactionType[] }> = ({
  transactions,
}) => {
  return (
    <table aria-label="Expenses">
      <thead>
        <tr>
          <th>Description</th>
          <th>Date</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {transactions.filter(isExpense).map((transaction) => (
          <Transaction transaction={transaction} key={transaction.id} />
        ))}
      </tbody>
    </table>
  );
};

const Income: React.FC<{ transactions: TransactionType[] }> = ({
  transactions,
}) => {
  return (
    <table aria-label="Income">
      <thead>
        <tr>
          <th>Description</th>
          <th>Date</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {transactions.filter(isIncome).map((transaction) => (
          <Transaction transaction={transaction} key={transaction.id} />
        ))}
      </tbody>
    </table>
  );
};

export const TransactionHistory = () => {
  const { data, loading, error } =
    useFetch<TransactionType[]>("/api/transactions");

  return (
    <>
      <h1 className="title">Transaction history</h1>
      <StateHandler error={error} loading={loading}>
        {data && (
          <Tabs.Root defaultValue="expenses" className="flow">
            <Tabs.List
              className="tabs__list"
              aria-label="Filter your transactions"
            >
              <Tabs.Trigger value="expenses">Expenses</Tabs.Trigger>
              <Tabs.Trigger value="income">Income</Tabs.Trigger>
            </Tabs.List>

            <Tabs.Content className="TabsContent" value="expenses">
              <Expenses transactions={data} />
            </Tabs.Content>
            <Tabs.Content className="TabsContent" value="income">
              <Income transactions={data} />
            </Tabs.Content>
          </Tabs.Root>
        )}
      </StateHandler>
    </>
  );
};
