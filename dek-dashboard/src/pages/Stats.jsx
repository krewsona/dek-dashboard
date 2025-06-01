import { useState } from 'react';
import StatForm from '../components/StatForm';
import StatList from '../components/StatList';
import './Stats.css';

function Stats() {
  const [stats, setStats] = useState([]);

  const handleAddStat = (newStat) => {
    setStats((prevStats) => [...prevStats, { id: Date.now(), ...newStat }]);
  };

  return (
    <div className="stats-container">
      <h2>Track Your Stats</h2>
      <StatForm onAddStat={handleAddStat} />
      
      <h3>Recent Stats</h3>
      {stats.length > 0 ? (
        <StatList stats={stats} />
      ) : (
        <p>No stats added yet.</p>
      )}
    </div>
  );
}

export default Stats;
