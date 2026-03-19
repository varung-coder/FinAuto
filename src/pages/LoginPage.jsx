import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithGoogle } from '../firebase/authService';
import toast from 'react-hot-toast';
import { RiGoogleLine, RiArrowLeftLine } from 'react-icons/ri';
import './LoginPage.css';

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    setLoading(true);
    try {
      await signInWithGoogle();
      toast.success('Welcome to FinAuto! 🎉');
      navigate('/dashboard');
    } catch (err) {
      toast.error('Sign‑in failed. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="orb orb-blue" style={{ width: 500, height: 500, top: '-100px', left: '-100px' }} />
      <div className="orb orb-violet" style={{ width: 400, height: 400, bottom: '-100px', right: '-100px' }} />

      <button className="login-back-btn" onClick={() => navigate('/')}>
        <RiArrowLeftLine /> Back
      </button>

      <div className="login-card glass-card">
        <div className="login-logo">
          <div className="login-logo-icon">F</div>
        </div>
        <h1 className="login-title">Welcome to FinAuto</h1>
        <p className="login-subtitle">
          Sign in to access your personal finance dashboard and start automating your budget.
        </p>

        <button
          className={`google-btn ${loading ? 'loading' : ''}`}
          onClick={handleGoogleSignIn}
          disabled={loading}
        >
          <RiGoogleLine className="google-icon" />
          <span>{loading ? 'Signing in...' : 'Continue with Google'}</span>
        </button>

        <div className="login-divider">
          <span>Secure · Private · Instant</span>
        </div>

        <div className="login-features">
          {['Smart Budgeting', 'Savings Goals', 'AI Insights'].map((f) => (
            <span key={f} className="login-feature-tag">{f}</span>
          ))}
        </div>

        <p className="login-terms">
          By signing in, you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
