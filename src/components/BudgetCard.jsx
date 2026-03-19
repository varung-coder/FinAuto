import './BudgetCard.css';

const BudgetCard = ({ budget }) => {
  const { category, icon, color, limit, spent } = budget;
  const pct = Math.min((spent / limit) * 100, 100);
  const exceeded = spent > limit;

  return (
    <div className={`budget-card glass-card ${exceeded ? 'exceeded' : ''}`}>
      <div className="budget-card-header">
        <div className="budget-icon" style={{ background: `${color}22` }}>
          <span style={{ fontSize: '1.4rem' }}>{icon}</span>
        </div>
        <div>
          <p className="budget-category">{category}</p>
          {exceeded && (
            <span className="badge badge-danger" style={{ fontSize: '0.65rem' }}>
              Over Budget
            </span>
          )}
        </div>
      </div>

      <div className="budget-amounts">
        <span className="budget-spent" style={{ color: exceeded ? 'var(--red)' : 'var(--text-primary)' }}>
          ₹{spent.toLocaleString('en-IN')}
        </span>
        <span className="budget-limit">/ ₹{limit.toLocaleString('en-IN')}</span>
      </div>

      <div className="progress-track" style={{ marginTop: 10 }}>
        <div
          className="progress-fill"
          style={{
            width: `${pct}%`,
            background: exceeded
              ? 'linear-gradient(90deg, var(--red), #FF6B6B)'
              : pct > 80
              ? 'linear-gradient(90deg, var(--orange), #FBBF24)'
              : `linear-gradient(90deg, ${color}, ${color}99)`,
          }}
        />
      </div>

      <div className="budget-footer">
        <span>{pct.toFixed(0)}% used</span>
        <span>
          {exceeded
            ? `₹${(spent - limit).toLocaleString('en-IN')} over`
            : `₹${(limit - spent).toLocaleString('en-IN')} left`}
        </span>
      </div>
    </div>
  );
};

export default BudgetCard;
