import './SavingsGoalCard.css';

const SavingsGoalCard = ({ goal }) => {
  const { name, icon, target, saved, deadline, color } = goal;
  const pct = Math.min((saved / target) * 100, 100);

  const daysLeft = () => {
    const today = new Date();
    const end = new Date(deadline);
    const diff = Math.ceil((end - today) / (1000 * 60 * 60 * 24));
    return diff > 0 ? diff : 0;
  };

  return (
    <div className="goal-card glass-card">
      <div className="goal-header">
        <div className="goal-icon" style={{ background: `${color}22`, color }}>
          {icon}
        </div>
        <div>
          <h3 className="goal-name">{name}</h3>
          <p className="goal-deadline">{daysLeft()} days remaining</p>
        </div>
        <span className="goal-pct" style={{ color }}>{pct.toFixed(0)}%</span>
      </div>

      <div className="goal-amounts">
        <span className="goal-saved">₹{saved.toLocaleString('en-IN')}</span>
        <span className="goal-target"> / ₹{target.toLocaleString('en-IN')}</span>
      </div>

      <div className="progress-track" style={{ marginTop: 12, height: 10 }}>
        <div
          className="progress-fill"
          style={{
            width: `${pct}%`,
            background: `linear-gradient(90deg, ${color}, ${color}88)`,
          }}
        />
      </div>

      <p className="goal-remaining">
        ₹{(target - saved).toLocaleString('en-IN')} more to go
      </p>
    </div>
  );
};

export default SavingsGoalCard;
