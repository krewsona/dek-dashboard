import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">Dek Dashboard</h1>

        <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>

        <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/schedule" onClick={() => setIsOpen(false)}>Schedule</Link>
          <Link to="/stats" onClick={() => setIsOpen(false)}>Stats</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
