import { useEffect, useState } from 'react';
import GameList from '../components/GameList';
import './Schedule.css';

function Schedule() {
  const [allGames, setAllGames] = useState([]);
  const [filteredGames, setFilteredGames] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState('All');
  const [view, setView] = useState('weekly');

  useEffect(() => {
    // Dummy data – you’ll fetch from JSON later
    const dummyGames = [
      { id: 1, team: 'Penguins', opponent: 'Sharks', date: '6/1/2025', time: '6:00 PM' },
      { id: 2, team: 'Falcons', opponent: 'Lions', date: '6/2/2025', time: '8:00 PM' },
      { id: 3, team: 'Penguins', opponent: 'Bears', date: '6/5/2025', time: '7:00 PM' },
    ];
    setAllGames(dummyGames);
    setFilteredGames(dummyGames);
  }, []);

  // Team filter logic
  useEffect(() => {
    if (selectedTeam === 'All') {
      setFilteredGames(allGames);
    } else {
      setFilteredGames(allGames.filter(game => game.team === selectedTeam));
    }
  }, [selectedTeam, allGames]);

  return (
    <div className="schedule-container">
      <h2>Schedule</h2>

      <div className="schedule-controls">
        <label>
          View:
          <select value={view} onChange={(e) => setView(e.target.value)}>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
        </label>

        <label>
          Filter by team:
          <select value={selectedTeam} onChange={(e) => setSelectedTeam(e.target.value)}>
            <option value="All">All</option>
            <option value="Penguins">Penguins</option>
            <option value="Falcons">Falcons</option>
          </select>
        </label>
      </div>

      {filteredGames.length > 0 ? (
        <GameList games={filteredGames} />
      ) : (
        <p>No games match your filters.</p>
      )}
    </div>
  );
}

export default Schedule;
