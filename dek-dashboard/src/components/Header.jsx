import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <h1>Dek Dashboard</h1>
      <nav>
        <Link to="/dashboard">Home</Link>
        <Link to="/schedule">Schedule</Link>
        <Link to="/stats">Stats</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
}

export default Header;