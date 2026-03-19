import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { signOutUser } from '../firebase/authService';
import toast from 'react-hot-toast';
import {
  RiDashboardLine, RiWalletLine, RiAwardLine, RiLightbulbLine,
  RiLogoutBoxLine,
} from 'react-icons/ri';
import './Sidebar.css';

const navItems = [
  { to: '/dashboard', icon: <RiDashboardLine />, label: 'Dashboard' },
  { to: '/budget', icon: <RiWalletLine />, label: 'Budget' },
  { to: '/goals', icon: <RiAwardLine />, label: 'Goals' },
  { to: '/insights', icon: <RiLightbulbLine />, label: 'AI Insights' },
];

const Sidebar = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOutUser();
      toast.success('Signed out successfully');
      navigate('/');
    } catch {
      toast.error('Failed to sign out');
    }
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <div className="sidebar-logo-icon">F</div>
        <span>FinAuto</span>
      </div>

      <nav className="sidebar-nav">
        {navItems.map(({ to, icon, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `sidebar-link ${isActive ? 'active' : ''}`
            }
          >
            <span className="sidebar-link-icon">{icon}</span>
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-footer">
        {currentUser && (
          <div className="sidebar-user">
            <img
              src={currentUser.photoURL || `https://ui-avatars.com/api/?name=${encodeURIComponent(currentUser.displayName || 'User')}&background=4F8EF7&color=fff`}
              alt="avatar"
              className="sidebar-avatar"
            />
            <div className="sidebar-user-info">
              <p className="sidebar-user-name">{currentUser.displayName?.split(' ')[0] || 'User'}</p>
              <p className="sidebar-user-email">{currentUser.email}</p>
            </div>
          </div>
        )}
        <button className="sidebar-logout" onClick={handleSignOut}>
          <RiLogoutBoxLine />
          <span>Sign Out</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
