import { useAuth } from '../context/AuthContext';
import {
  mockTransactions, mockCategorySpending,
  mockSpendingTrend, mockInsights,
} from '../data/mockData';
import { SpendingPieChart, SpendingAreaChart } from '../components/ExpenseChart';
import TransactionList from '../components/TransactionList';
import InsightCard from '../components/InsightCard';
import { RiArrowUpLine, RiArrowDownLine, RiWalletLine, RiSaveLine } from 'react-icons/ri';
import './DashboardPage.css';

const DashboardPage = () => {
  const { currentUser } = useAuth();
  const firstName = currentUser?.displayName?.split(' ')[0] || 'there';

  const totalSpent = mockTransactions
    .filter((t) => t.amount < 0)
    .reduce((acc, t) => acc + Math.abs(t.amount), 0);

  const income = mockTransactions
    .filter((t) => t.amount > 0)
    .reduce((acc, t) => acc + t.amount, 0);

  const savings = income - totalSpent;
  const savingsRate = ((savings / income) * 100).toFixed(0);

  return (
    <div className="dashboard animate-fadeIn">
      <div className="dashboard-greeting">
        <h2>Good morning, {firstName} 👋</h2>
        <p>Here's your financial overview for March 2025</p>
      </div>

      {/* Stat Cards */}
      <div className="grid-4 dashboard-stats">
        <div className="stat-card glass-card">
          <div className="stat-icon" style={{ background: 'rgba(79,142,247,0.15)', color: 'var(--blue)' }}>
            <RiWalletLine />
          </div>
          <p className="stat-label">Total Income</p>
          <p className="stat-value">₹{income.toLocaleString('en-IN')}</p>
          <p className="stat-change positive"><RiArrowUpLine /> Credit this month</p>
        </div>

        <div className="stat-card glass-card">
          <div className="stat-icon" style={{ background: 'rgba(239,68,68,0.15)', color: 'var(--red)' }}>
            <RiArrowDownLine />
          </div>
          <p className="stat-label">Total Spending</p>
          <p className="stat-value">₹{totalSpent.toLocaleString('en-IN')}</p>
          <p className="stat-change negative"><RiArrowDownLine /> Spent this month</p>
        </div>

        <div className="stat-card glass-card">
          <div className="stat-icon" style={{ background: 'rgba(16,185,129,0.15)', color: 'var(--green)' }}>
            <RiSaveLine />
          </div>
          <p className="stat-label">Net Savings</p>
          <p className="stat-value">₹{savings.toLocaleString('en-IN')}</p>
          <p className="stat-change positive"><RiArrowUpLine /> {savingsRate}% savings rate</p>
        </div>

        <div className="stat-card glass-card" style={{ background: 'var(--gradient-card)' }}>
          <div className="stat-icon" style={{ background: 'rgba(124,58,237,0.15)', color: 'var(--violet)' }}>
            <span>🎯</span>
          </div>
          <p className="stat-label">Goals Active</p>
          <p className="stat-value">4</p>
          <p className="stat-change positive"><RiArrowUpLine /> On track</p>
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid-2 dashboard-charts">
        <div className="glass-card chart-card">
          <h3 className="section-title">Spending by Category</h3>
          <SpendingPieChart data={mockCategorySpending} />
        </div>
        <div className="glass-card chart-card">
          <h3 className="section-title">Monthly Trend</h3>
          <SpendingAreaChart data={mockSpendingTrend} />
        </div>
      </div>

      {/* Transactions + Insights */}
      <div className="grid-2 dashboard-bottom">
        <div className="glass-card txn-card">
          <div className="section-title">
            Recent Transactions
            <span>View all</span>
          </div>
          <TransactionList transactions={mockTransactions} limit={7} />
        </div>

        <div className="insights-col">
          <div className="section-title">
            AI Insights
            <span>View all</span>
          </div>
          <div className="insights-list">
            {mockInsights.slice(0, 3).map((insight) => (
              <InsightCard key={insight.id} insight={insight} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
