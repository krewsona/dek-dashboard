import { useState, useEffect } from 'react';
import StatForm from '../components/StatForm';
import './Stats.css';

function Stats() {
  const [stats, setStats] = useState([]);

  // load stats from local storage
  useEffect(() => {
    const savedStats = JSON.parse(localStorage.getItem('userStats')) || [];
    const sortedStats = savedStats.sort((a, b) => new Date(b.date) - new Date(a.date));
    setStats(sortedStats);
  }, []);

  // handle adding a new stat
  const handleAddStat = (newStat) => {
    const updatedStats = [newStat, ...stats];
    setStats(updatedStats);
    localStorage.setItem('userStats', JSON.stringify(updatedStats));
  };

  // handle removing a stat
  const handleRemoveStat = (indexToRemove) => {
    const updatedStats = stats.filter((_, index) => index !== indexToRemove);
    setStats(updatedStats);
    localStorage.setItem('userStats', JSON.stringify(updatedStats));
  };





  return (
    <div className="stats-page">
      <h2>Add Stats</h2>
      <StatForm onAddStat={handleAddStat} />

      <h3>Recent Stats</h3>
      {stats.length > 0 ? (
        <ul className="stat-list">
          {stats.slice(0, 10).map((stat, index) => (
            <li key={index}>
              <strong>{stat.team}</strong>: {stat.goals} Goal(s) / {stat.assists} Assist(s) on {stat.date}
              <button className="remove-stat" onClick={() => handleRemoveStat(index)}>🗑️</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No stats added yet.</p>
      )}
    </div>
  );
}




export default Stats;

