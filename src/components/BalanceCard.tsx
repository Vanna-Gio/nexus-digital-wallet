import { useEffect, useState } from "react";
import { mockTransactions } from "../data/mockData";
import { formatCurrency } from "../utils/formatCurrency";
import '../styles/BalanceCard.scss';
export default function BalanceCard() {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);
    }, []);

    // Calculate totals (simple versionn -real app would come from API/account)
    const usdTxs = mockTransactions.filter(tx => tx.currency === 'USD');
    const khrTxs = mockTransactions.filter(tx => tx.currency === 'KHR');

    const usdBalance = usdTxs.reduce((sum, tx) => sum + tx.amount, 0);
    const khrBalance = khrTxs.reduce((sum, tx) => sum + tx.amount, 0);

    return (
        <div className={`balance-card ${animate ? 'fade-in' : ''}`}>
            <h2>Your Balances</h2>
            <div className="balances">
                <div className="balance-item usd">
                    <span className="label">USD Account</span>
                    
                    <span className={`amount ${usdBalance < 0 ? 'negative' : ''}`}>
                        {formatCurrency(Math.abs(usdBalance), 'USD')}
                        {usdBalance < 0 ? ' (Overdrawn)' : ''}
                    </span>
                    
                </div>
                <div className="balance-item khr">
                    <span className="label">KHR Account</span>
                    <span className="amount">{formatCurrency(khrBalance, 'KHR')}</span>
                </div>
            </div>
        </div>
    )
}