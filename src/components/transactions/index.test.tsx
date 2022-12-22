import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { TransactionHistory } from ".";

describe("transaction history", () => {
  test("the expenses tab should be shown by default", async () => {
    render(<TransactionHistory />);

    expect(screen.getByText("Transaction history")).toBeInTheDocument();
    waitFor(() => {
      const expensesTabTrigger = screen.getByRole("tab", {
        name: "Expenses",
      });

      expect(expensesTabTrigger).toHaveAttribute("data-state", "active");
      const expensesTable = screen.getByRole("table", {
        name: "Expenses",
      });

      expect(expensesTable).toBeInTheDocument();
      expect(screen.getByText("24 June 2022")).toBeInTheDocument();
      expect(screen.getByText("€-20.25")).toBeInTheDocument();
      expect(screen.getByText("£-76.06")).toBeInTheDocument();
    });
  });

  test("changing between the expenses and income tabs should show different transactions", async () => {
    render(<TransactionHistory />);

    const expensesTabTrigger = screen.queryByRole("tab", {
      name: "Expenses",
    });

    const expensesTable = screen.queryByRole("table", {
      name: "Expenses",
    });

    const incomeTable = screen.queryByRole("table", {
      name: "Income",
    });

    waitFor(() => expect(expensesTable).toBeInTheDocument());
    waitFor(() => expect(incomeTable).toBeInTheDocument());
    waitFor(() => expect("€-20.25").toBeInTheDocument());

    waitFor(() => {
      expect(incomeTable).toBeInTheDocument();
      const incomeTabTrigger = screen.getByRole("tab", {
        name: "Income",
      });

      fireEvent.click(incomeTabTrigger);
      expect(incomeTabTrigger).toHaveAttribute("data-state", "active");
      expect(expensesTabTrigger).toHaveAttribute("data-state", "inactive");
      expect(screen.queryByText("€-20.25")).not.toBeInTheDocument();
    });
  });
});
