import { render, screen, waitFor } from "@testing-library/react";
import { TransactionHistory } from ".";

describe("transaction history", () => {
  test("the expenses tab should be shown by default", async () => {
    render(<TransactionHistory />);

    await expect(screen.getByText("Transaction history")).toBeInTheDocument();

    const expensesTabTrigger = await waitFor(() =>
      screen.getByRole("tab", {
        name: "Expenses",
      })
    );

    await expect(expensesTabTrigger).toHaveAttribute("data-state", "active");

    const expensesTable = screen.getByRole("table", {
      name: "Expenses",
    });

    expect(expensesTable).toBeInTheDocument();
    expect(screen.getByText("24 June 2022")).toBeInTheDocument();
    expect(screen.getByText("€-20.25")).toBeInTheDocument();
    expect(screen.getByText("£-76.06")).toBeInTheDocument();
  });

  test.skip("changing between the expenses and income tabs should show different transactions", () => {
    render(<TransactionHistory />);

    const expensesTabTrigger = screen.getByRole("tab", {
      name: "Expenses",
    });
    const incomeTabTrigger = screen.getByRole("tab", {
      name: "Income",
    });
    const expensesTable = screen.getByRole("table", {
      name: "Expenses",
    });
    const incomeTable = screen.queryByRole("table", {
      name: "Income",
    });

    expect(expensesTable).toBeInTheDocument();
    expect(incomeTable).not.toBeInTheDocument();

    expect(screen.getByText("-20.25")).toBeInTheDocument();

    incomeTabTrigger.click();

    expect(incomeTabTrigger).toHaveAttribute("data-state", "active");
    expect(expensesTabTrigger).toHaveAttribute("data-state", "inactive");
    expect(screen.queryByText("-20.25")).not.toBeInTheDocument();
  });
});
