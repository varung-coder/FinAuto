import './AlertBox.css';

const AlertBox = ({ categories }) => {
  const overBudget = categories.filter((c) => c.spent > c.limit);

  if (!overBudget.length) return null;

  return (
    <div className="alert-box glass-card">
      <div className="alert-header">
        <span className="alert-emoji">⚠️</span>
        <p className="alert-title">Budget Alert</p>
      </div>
      <p className="alert-msg">
        You've exceeded your budget in{' '}
        <strong style={{ color: 'var(--orange)' }}>
          {overBudget.map((c) => c.category).join(', ')}
        </strong>
        . Review and adjust your spending.
      </p>
    </div>
  );
};

export default AlertBox;
