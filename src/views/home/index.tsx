import { Accounts } from "../../components/accounts";
import { TransactionHistory } from "../../components/transactions";

export const Home = () => (
  <div className="home">
    <Accounts />
    <TransactionHistory />
  </div>
);
