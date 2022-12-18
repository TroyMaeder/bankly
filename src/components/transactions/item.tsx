import type { Transaction as TransactionType } from "../../../types";
import CURRENCY_SYMBOLS from "../../currency";
import formatDate from "../../helpers/formatDate";
import { Avatar } from "./avatar";

type Props = {
  transaction: TransactionType;
};

export const Transaction = ({ transaction }: Props) => (
  <tr>
    <td>
      <div className="transaction-detail">
        <Avatar name={transaction.description} />
        <div className="transaction-description">
          {transaction.description}
          <div className="transaction-category">{transaction.category}</div>
        </div>
      </div>
    </td>
    <td>
      <div>{formatDate(transaction.date)}</div>
    </td>
    <td className="transaction-amount">
      <div className="amount">
        {CURRENCY_SYMBOLS[transaction.amount.currency_iso]}
        {transaction.amount.value}
      </div>
    </td>
  </tr>
);
