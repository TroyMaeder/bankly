import { rest } from "msw";
import { server } from "../../jest.setup";
import { accounts } from "./data/accounts";
import { transactions } from "./data/transactions";
import { render, screen, waitFor } from "@testing-library/react";
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
  test("only renders title if no transaction data exists", async () => {
    server.use(
      rest.get("/api/transactions", (_, res, ctx) => {
        return res(ctx.status(200), ctx.json([]));
      })
    );
    render(<TransactionHistory />);
    expect(screen.getByText("Transaction history")).toBeInTheDocument();

    const text = screen.queryByText("British Gas");
    expect(text).not.toBeInTheDocument();
  });

  test("renders transaction data", async () => {
    server.use(
      rest.get("/api/transactions", (_, res, ctx) => {
        res(ctx.status(200), ctx.json(transactions));
      })
    );
    render(<TransactionHistory />);

    await waitFor(() => screen.getByText("British Gas"));
    expect(screen.getByText("British Gas")).toBeInTheDocument();
  });

  test("shows error message", async () => {
    server.use(
      rest.get("/api/transactions", (_, res, ctx) => {
        return res(ctx.status(500));
      })
    );
    render(<TransactionHistory />);

    const error = await screen.findByText("Error...");
    expect(error).toBeInTheDocument();
  });

  test("shows loading spinner while data is loading", async () => {
    render(<TransactionHistory />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });
});
