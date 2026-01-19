import './App.css'; 
import  TransactionList  from './components/TransactionList';
function App() {
  return (
    <div className="App">
      <header>
        <h1>Nexus Digital Wallet!</h1>
      </header>
      <main>
        <TransactionList />
      </main>
      
    </div>
  );
}

export default App;