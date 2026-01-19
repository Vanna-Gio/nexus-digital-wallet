import BalanceCard from "./BalanceCard";
import TransactionList from "./TransactionList";
import '../styles/Dashboard.scss'
import ProfileHeader from "./ProfileHeader";
export default function Dashboard() {
    return(
        <div className="dashboard">
            <ProfileHeader />

            <main className="main-content">
                <BalanceCard />
                <TransactionList />
            </main>
        </div>
    )
}