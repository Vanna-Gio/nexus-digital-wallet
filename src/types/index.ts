export interface Transaction {
    id: string;
    date: string; // ISO string,
    description: string;
    category: "Transfer" | "Deposit" | "Withdrawal" | "Bill Payment" | "POS";
    amount: number; // positive = income, negative = expense
    currency: "USD" | "KHR";
    status: "Completed" | "Pending" | "Failed";
    balanceAfter?: number; // optional, we can calculate it later
}

export interface Account {
    currency: "USD" | "KHR";
    balance: number;
}