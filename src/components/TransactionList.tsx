import { useState, useMemo } from 'react';
import { mockTransactions } from '../data/mockData';
import TransactionItem from './TransactionItem';
import '../styles/TransactionList.scss';

export default function TransactionList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState<string>('All');
  const [sortOrder] = useState<'newest' | 'oldest' > ('newest'); // we can make this changeable later
  const [visibelCount, setVisibleCount] = useState(3);
  

  const categories = ['All', 'Transfer', 'Deposit', 'Withdrawal', 'Bill Payment', 'POS'];

  const filteredAndSearched = useMemo(() => {
    let result = [...mockTransactions]

    //1. Category filter
    if (filterCategory !== 'All') {
      result = result.filter(tx => tx.category === filterCategory);
    }
    // 2.Search
    if(searchTerm.trim()) {
      const term = searchTerm.toLowerCase().trim();
      result = result.filter(tx => 
        tx.description.toLowerCase().includes(term)
      );
    }
    //3. Sort
    result.sort((a,b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();

      return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
    });

    return result;

  }, [searchTerm, filterCategory, sortOrder]);

  const visibleTransactions = filteredAndSearched.slice(0, visibelCount);
  const hasMore  = visibelCount < filteredAndSearched.length;

  const handleLoadMore = () =>  {
    setVisibleCount(prev => prev + 10);
  }
  const filteredTransactions = mockTransactions.filter(tx =>
    filterCategory === 'All' ? true : tx.category === filterCategory
  );

  return (
    <div className="transaction-list">

      <div className='controls' >
        <input 
          type='text'
          placeholder='Search transactions...'
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setVisibleCount(10); //reset pagination when searching 
          }}
          className='search-input'
          />

          <select 
            value={filterCategory}
            onChange={(e) => {
              setFilterCategory(e.target.value);
              setVisibleCount(10);
            }}
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
      </div>

      <div className="items">
        {filteredTransactions.length === 0 ? (
          <div className='empty-state'>
              <p>No transactions found.</p>
              <small>Try changing search or filter</small>
          </div>
          
        ) : (
          <>
            {visibleTransactions.map(tx => (
              <TransactionItem key={tx.id} transaction={tx} />
            ))}

            {hasMore && (
              <button className='load-more' onClick={handleLoadMore}>
                Load More
              </button>
            )}
            
          </>
          
        )}
      </div>
    </div>
  );
}