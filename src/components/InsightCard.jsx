import './InsightCard.css';

const severityConfig = {
  info:    { color: 'var(--blue)',   bg: 'rgba(79,142,247,0.08)'  },
  success: { color: 'var(--green)',  bg: 'rgba(16,185,129,0.08)'  },
  warning: { color: 'var(--orange)', bg: 'rgba(249,115,22,0.08)' },
  danger:  { color: 'var(--red)',    bg: 'rgba(239,68,68,0.08)'   },
};

const InsightCard = ({ insight }) => {
  const { title, description, severity, icon } = insight;
  const config = severityConfig[severity] || severityConfig.info;

  return (
    <div className="insight-card glass-card" style={{ borderColor: `${config.color}22` }}>
      <div className="insight-icon" style={{ background: config.bg, color: config.color }}>
        {icon}
      </div>
      <div className="insight-content">
        <div className="insight-header">
          <h3 className="insight-title">{title}</h3>
          <span className={`badge badge-${severity}`}>{severity.charAt(0).toUpperCase() + severity.slice(1)}</span>
        </div>
        <p className="insight-desc">{description}</p>
      </div>
    </div>
  );
};

export default InsightCard;
