import { Accounts } from "../../components/accounts";
import { TransactionHistory } from "../../components/transactions";

export const Home = () => (
  <div className="wrapper">
    <Accounts />
    <TransactionHistory />
  </div>
);
