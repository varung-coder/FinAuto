import { mockInsights } from '../data/mockData';
import InsightCard from '../components/InsightCard';
import { mockBudgets, mockSpendingTrend } from '../data/mockData';
import './InsightsPage.css';

const InsightsPage = () => {
  const topCategory = [...mockBudgets].sort((a, b) => b.spent - a.spent)[0];
  const lastMonth = mockSpendingTrend[mockSpendingTrend.length - 1];
  const savingsRate = (((lastMonth.income - lastMonth.spending) / lastMonth.income) * 100).toFixed(0);

  const summaryStats = [
    { label: 'Savings Rate', value: `${savingsRate}%`, color: 'var(--green)', icon: '💹' },
    { label: 'Top Category', value: topCategory.category, color: 'var(--orange)', icon: topCategory.icon },
    { label: 'Active Alerts', value: `${mockBudgets.filter(b => b.spent > b.limit).length}`, color: 'var(--red)', icon: '🔔' },
    { label: 'Goals On Track', value: '4/4', color: 'var(--blue)', icon: '🎯' },
  ];

  return (
    <div className="insights-page animate-fadeIn">
      <div className="page-header">
        <h1>AI Insights</h1>
        <p>Personalized recommendations based on your spending patterns.</p>
      </div>

      {/* Summary Cards */}
      <div className="grid-4" style={{ marginBottom: 28 }}>
        {summaryStats.map((s) => (
          <div key={s.label} className="stat-card glass-card">
            <div className="insight-stat-icon">{s.icon}</div>
            <p className="stat-label">{s.label}</p>
            <p className="stat-value" style={{ color: s.color, fontSize: '1.6rem' }}>{s.value}</p>
          </div>
        ))}
      </div>

      {/* Insights */}
      <h2 className="section-title">
        Recommendations
        <span className="badge badge-info">{mockInsights.length} insights</span>
      </h2>
      <div className="insights-grid">
        {mockInsights.map((insight) => (
          <InsightCard key={insight.id} insight={insight} />
        ))}
      </div>
    </div>
  );
};

export default InsightsPage;
