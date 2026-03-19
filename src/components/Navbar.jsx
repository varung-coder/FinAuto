import { RiBellLine, RiSearchLine } from 'react-icons/ri';
import { useAuth } from '../context/AuthContext';
import './Navbar.css';

const Navbar = ({ title }) => {
  const { currentUser } = useAuth();

  return (
    <header className="navbar">
      <div className="navbar-left">
        <h2 className="navbar-title">{title}</h2>
      </div>

      <div className="navbar-right">
        <div className="navbar-search">
          <RiSearchLine />
          <input type="text" placeholder="Search transactions..." />
        </div>

        <button className="navbar-icon-btn" aria-label="Notifications">
          <RiBellLine />
          <span className="notif-dot" />
        </button>

        {currentUser && (
          <img
            src={currentUser.photoURL || `https://ui-avatars.com/api/?name=${encodeURIComponent(currentUser.displayName || 'User')}&background=4F8EF7&color=fff`}
            alt="avatar"
            className="navbar-avatar"
          />
        )}
      </div>
    </header>
  );
};

export default Navbar;
