import { mockGoals } from '../data/mockData';
import SavingsGoalCard from '../components/SavingsGoalCard';
import './SavingsGoalsPage.css';

const SavingsGoalsPage = () => {
  const totalSaved  = mockGoals.reduce((acc, g) => acc + g.saved, 0);
  const totalTarget = mockGoals.reduce((acc, g) => acc + g.target, 0);
  const overallPct  = ((totalSaved / totalTarget) * 100).toFixed(0);

  return (
    <div className="goals-page animate-fadeIn">
      <div className="page-header">
        <h1>Savings Goals</h1>
        <p>Track your progress towards every financial milestone.</p>
      </div>

      {/* Summary */}
      <div className="goals-summary glass-card">
        <div className="goals-summary-stats">
          <div>
            <p className="stat-label">Total Saved</p>
            <p className="stat-value" style={{ color: 'var(--green)' }}>₹{totalSaved.toLocaleString('en-IN')}</p>
          </div>
          <div>
            <p className="stat-label">Total Target</p>
            <p className="stat-value">₹{totalTarget.toLocaleString('en-IN')}</p>
          </div>
          <div>
            <p className="stat-label">Remaining</p>
            <p className="stat-value">₹{(totalTarget - totalSaved).toLocaleString('en-IN')}</p>
          </div>
          <div>
            <p className="stat-label">Overall Progress</p>
            <p className="stat-value" style={{ color: 'var(--blue)' }}>{overallPct}%</p>
          </div>
        </div>
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>Combined Progress</span>
            <span style={{ fontSize: '0.78rem', color: 'var(--blue)', fontWeight: 600 }}>{overallPct}%</span>
          </div>
          <div className="progress-track" style={{ height: 10 }}>
            <div className="progress-fill" style={{
              width: `${overallPct}%`,
              background: 'var(--gradient-accent)',
            }} />
          </div>
        </div>
      </div>

      {/* Goal Cards */}
      <h2 className="section-title" style={{ marginTop: 24 }}>
        Your Goals
        <span>{mockGoals.length} active</span>
      </h2>
      <div className="grid-2">
        {mockGoals.map((goal) => (
          <SavingsGoalCard key={goal.id} goal={goal} />
        ))}
      </div>
    </div>
  );
};

export default SavingsGoalsPage;
