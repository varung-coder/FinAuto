import { useNavigate } from 'react-router-dom';
import { RiArrowRightLine, RiShieldLine, RiBarChartLine, RiLightbulbLine, RiCheckLine } from 'react-icons/ri';
import './LandingPage.css';

const features = [
  {
    icon: <RiBarChartLine />,
    color: '#4F8EF7',
    title: 'Smart Budgeting',
    desc: 'Set category budgets, track spending in real-time, and get alerts before you overspend.',
  },
  {
    icon: <RiShieldLine />,
    color: '#7C3AED',
    title: 'Savings Goals',
    desc: 'Define your financial goals — vacation, gadgets, or emergency fund — and watch your progress grow.',
  },
  {
    icon: <RiLightbulbLine />,
    color: '#14B8A6',
    title: 'AI Insights',
    desc: 'Get personalized spending insights and actionable recommendations powered by AI analytics.',
  },
];

const steps = [
  { step: '01', title: 'Connect & Sign In', desc: 'Securely log in with your Google account in one click.' },
  { step: '02', title: 'Set Your Budgets', desc: 'Define spending limits for each category that matters to you.' },
  { step: '03', title: 'Track & Grow', desc: 'Monitor your finances and hit every savings goal on time.' },
];

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing">
      {/* Decorative orbs */}
      <div className="orb orb-blue" style={{ width: 600, height: 600, top: '-200px', left: '-200px' }} />
      <div className="orb orb-violet" style={{ width: 500, height: 500, top: '200px', right: '-150px' }} />

      {/* Header */}
      <header className="landing-header">
        <div className="landing-logo">
          <div className="landing-logo-icon">F</div>
          <span>FinAuto</span>
        </div>
        <button className="btn-outline" onClick={() => navigate('/login')}>Sign In</button>
      </header>

      {/* Hero */}
      <section className="landing-hero">
        <div className="hero-badge">
          <RiCheckLine />
          <span>Hackathon‑Ready Fintech App</span>
        </div>
        <h1 className="hero-title">
          Your Money,<br />
          <span className="hero-gradient">Fully Automated.</span>
        </h1>
        <p className="hero-subtitle">
          FinAuto is a next-gen personal finance platform that tracks budgets,
          manages savings goals, and delivers AI-powered insights — all in a stunning dark UI.
        </p>
        <div className="hero-cta">
          <button className="btn-primary hero-btn" onClick={() => navigate('/login')}>
            Get Started Free <RiArrowRightLine />
          </button>
          <p className="hero-note">No credit card required · Instant access</p>
        </div>

        {/* Stats */}
        <div className="hero-stats">
          {[
            { label: 'Transactions Tracked', value: '10K+' },
            { label: 'Budget Categories', value: '6+' },
            { label: 'Avg. Savings Boost', value: '23%' },
          ].map((s) => (
            <div key={s.label} className="hero-stat">
              <span className="hero-stat-value">{s.value}</span>
              <span className="hero-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="landing-features">
        <p className="section-eyebrow">Core Features</p>
        <h2 className="section-heading">Everything You Need to Win Financially</h2>
        <div className="features-grid">
          {features.map((f) => (
            <div key={f.title} className="feature-card glass-card">
              <div className="feature-icon" style={{ background: `${f.color}22`, color: f.color }}>
                {f.icon}
              </div>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="landing-steps">
        <p className="section-eyebrow">How It Works</p>
        <h2 className="section-heading">Get Up & Running in 3 Steps</h2>
        <div className="steps-grid">
          {steps.map((s) => (
            <div key={s.step} className="step-card glass-card">
              <span className="step-number">{s.step}</span>
              <h3 className="step-title">{s.title}</h3>
              <p className="step-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="landing-cta-banner">
        <div className="cta-banner-inner glass-card">
          <h2>Ready to Take Control of Your Finances?</h2>
          <p>Join FinAuto today and start your journey to financial freedom.</p>
          <button className="btn-primary" onClick={() => navigate('/login')}>
            Start for Free <RiArrowRightLine />
          </button>
        </div>
      </section>

      <footer className="landing-footer">
        <p>© 2025 FinAuto · Built with ❤️ for the Hackathon</p>
      </footer>
    </div>
  );
};

export default LandingPage;
