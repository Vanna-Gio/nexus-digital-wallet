import { useState } from 'react';
import { mockTransactions } from '../data/mockData';
import TransactionItem from './TransactionItem';
import '../styles/TransactionList.scss';

export default function TransactionList() {
  const [filterCategory, setFilterCategory] = useState<string>('All');

  const categories = ['All', 'Transfer', 'Deposit', 'Withdrawal', 'Bill Payment', 'POS'];

  const filteredTransactions = mockTransactions.filter(tx =>
    filterCategory === 'All' ? true : tx.category === filterCategory
  );

  return (
    <div className="transaction-list">
      <div className="header">
        <h2>Recent Transactions</h2>
        <select
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div className="items">
        {filteredTransactions.length === 0 ? (
          <p className="empty">No transactions found.</p>
        ) : (
          filteredTransactions.map(tx => (
            <TransactionItem key={tx.id} transaction={tx} />
          ))
        )}
      </div>
    </div>
  );
}