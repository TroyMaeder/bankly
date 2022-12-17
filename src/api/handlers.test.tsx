import { rest } from "msw";
import { server } from "../../jest.setup";
import { accounts } from "./data/accounts";
import { transactions } from "./data/transactions";
import { render, screen } from "@testing-library/react";
import { TransactionHistory } from "../components/transactions";

describe("/api/", () => {
  test("/accounts", async () => {
    const response = await fetch("/api/accounts");
    expect(await response.json()).toEqual(accounts);
  });

  test("/transactions", async () => {
    const response = await fetch("/api/transactions");
    expect(await response.json()).toEqual(transactions);
  });
});

describe("Transaction component", () => {
  test("shows loading spinner while data is loading", async () => {
    render(<TransactionHistory />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  test("only renders title if no data exists", async () => {
    server.use(
      rest.get("/api/transactions", (_, res, ctx) => {
        return res(ctx.status(200), ctx.json([]));
      })
    );
    render(<TransactionHistory />);
    expect(screen.getByText("Transaction History")).toBeInTheDocument();
    const expensesText = screen.queryByText("Expenses");
    expect(expensesText).not.toBeInTheDocument();
  });
});
