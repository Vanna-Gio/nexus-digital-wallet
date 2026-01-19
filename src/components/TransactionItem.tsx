import type { Transaction } from "../types";
import { formatCurrency } from "../utils/formatCurrency";
import '../styles/TransactionItem.scss';

interface Props {
    transaction: Transaction;
}

export default function TransactionItem({ transaction }: Props) {
    const isIncome = transaction.amount > 0;
    const statusClass = transaction.status.toLowerCase();

    return (
        <div className={`transaction-item ${statusClass} ${isIncome ? 'income' : 'expense'}`}>
            <div className="left">
                <div  className="description">{transaction.description}</div>
                <div className="date">{new Date(transaction.date).toLocaleDateString('en-GB')}</div>
                <div className="category">{transaction.category}</div>

            </div>

            <div className="right">
                <div className={`amount ${isIncome ? 'positive' : 'negative'}`}>
                    {isIncome ? '+' : ''}
                    {formatCurrency(transaction.amount, transaction.currency)}
                </div>
                <div className="status">{transaction.status}</div>
            </div>
        </div>
    )
}