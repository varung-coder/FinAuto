import { mockBudgets } from '../data/mockData';
import BudgetCard from '../components/BudgetCard';
import AlertBox from '../components/AlertBox';
import './BudgetPage.css';

const BudgetPage = () => {
  const totalBudget = mockBudgets.reduce((acc, b) => acc + b.limit, 0);
  const totalSpent  = mockBudgets.reduce((acc, b) => acc + b.spent, 0);
  const overallPct = Math.min((totalSpent / totalBudget) * 100, 100);

  return (
    <div className="budget-page animate-fadeIn">
      <div className="page-header">
        <h1>Budget Manager</h1>
        <p>Set spending limits and track your categories in real-time.</p>
      </div>

      <AlertBox categories={mockBudgets} />

      {/* Overall Summary */}
      <div className="budget-summary glass-card">
        <div className="budget-summary-info">
          <div>
            <p className="stat-label">Total Budget</p>
            <p className="stat-value">₹{totalBudget.toLocaleString('en-IN')}</p>
          </div>
          <div>
            <p className="stat-label">Total Spent</p>
            <p className="stat-value" style={{ color: totalSpent > totalBudget ? 'var(--red)' : 'var(--text-primary)' }}>
              ₹{totalSpent.toLocaleString('en-IN')}
            </p>
          </div>
          <div>
            <p className="stat-label">Remaining</p>
            <p className="stat-value" style={{ color: 'var(--green)' }}>
              ₹{Math.max(totalBudget - totalSpent, 0).toLocaleString('en-IN')}
            </p>
          </div>
        </div>
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>Overall Usage</span>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-primary)', fontWeight: 600 }}>{overallPct.toFixed(0)}%</span>
          </div>
          <div className="progress-track" style={{ height: 10 }}>
            <div className="progress-fill" style={{
              width: `${overallPct}%`,
              background: overallPct > 90 ? 'linear-gradient(90deg,var(--red),#FF6B6B)' :
                         overallPct > 70 ? 'linear-gradient(90deg,var(--orange),#FBBF24)' :
                         'var(--gradient-btn)'
            }} />
          </div>
        </div>
      </div>

      {/* Budget Cards */}
      <h2 className="section-title" style={{ marginTop: 24 }}>Categories</h2>
      <div className="grid-3">
        {mockBudgets.map((budget) => (
          <BudgetCard key={budget.id} budget={budget} />
        ))}
      </div>
    </div>
  );
};

export default BudgetPage;
