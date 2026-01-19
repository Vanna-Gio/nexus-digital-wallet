import type { Transaction } from '../types';

export const mockTransactions: Transaction[] = [
  {
    id: "tx001",
    date: "2026-01-18T14:22:00Z",
    description: "Salary Deposit",
    category: "Deposit",
    amount: 2500,
    currency: "USD",
    status: "Completed"
  },
  {
    id: "tx002",
    date: "2026-01-17T09:15:00Z",
    description: "Wing Transfer to Mom",
    category: "Transfer",
    amount: -150,
    currency: "USD",
    status: "Completed"
  },
  {
    id: "tx003",
    date: "2026-01-16T18:45:00Z",
    description: "AEON Mall Shopping",
    category: "POS",
    amount: -89.50,
    currency: "USD",
    status: "Completed"
  },
  {
    id: "tx004",
    date: "2026-01-15T11:30:00Z",
    description: "Electricity Bill",
    category: "Bill Payment",
    amount: -45,
    currency: "USD",
    status: "Pending"
  },
  {
    id: "tx005",
    date: "2026-01-14T07:20:00Z",
    description: "Cash Deposit at CSM",
    category: "Deposit",
    amount: 2000000,
    currency: "KHR",
    status: "Completed"
  },
  {
    id: "tx006",
    date: "2026-01-13T16:10:00Z",
    description: "Coffee at Brown Cafe",
    category: "POS",
    amount: -12000,
    currency: "KHR",
    status: "Completed"
  },
  {
    id: "tx007",
    date: "2026-01-12T12:00:00Z",
    description: "Freelance Payment",
    category: "Deposit",
    amount: 800,
    currency: "USD",
    status: "Completed"
  },
  {
    id: "tx008",
    date: "2026-01-11T20:30:00Z",
    description: "Grab Ride",
    category: "Transfer",
    amount: -8.5,
    currency: "USD",
    status: "Completed"
  },
  {
    id: "tx009",
    date: "2026-01-10T13:45:00Z",
    description: "Water Bill",
    category: "Bill Payment",
    amount: -250000,
    currency: "KHR",
    status: "Completed"
  },
  {
    id: "tx010",
    date: "2026-01-09T10:00:00Z",
    description: "ATM Withdrawal",
    category: "Withdrawal",
    amount: -300,
    currency: "USD",
    status: "Pending"
  }
];