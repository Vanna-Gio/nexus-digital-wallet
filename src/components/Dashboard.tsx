import BalanceCard from "./BalanceCard";
import TransactionList from "./TransactionList";
import '../styles/Dashboard.scss'
export default function Dashboard() {
    return(
        <div className="dashboard">
            <header className="app-header">
                <h1>Nexus Digital Wallet</h1>
            </header>

            <main className="main-content">
                <BalanceCard />
                <TransactionList />
            </main>
        </div>
    )
}