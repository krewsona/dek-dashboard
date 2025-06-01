import { useEffect, useState } from 'react';
import './Schedule.css';

function Schedule() {
  const [allGames, setAllGames] = useState([]);
  const [filteredGames, setFilteredGames] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState('');

  useEffect(() => {
    fetch('./scheduleData.json')
      .then((res) => res.json())
      .then((data) => {
        const sorted = [...data].sort((a, b) => new Date(a.date) - new Date(b.date));
        setAllGames(sorted);
        setFilteredGames(sorted); 
      })
      .catch((err) => console.error('Failed to load schedule', err));
  }, []);

  const handleTeamChange = (e) => {
    const team = e.target.value;
    setSelectedTeam(team);

    if (team === '') {
      setFilteredGames(allGames);
    } else {
      const filtered = allGames.filter(
        (game) => game.team.toLowerCase().includes(team.toLowerCase())
      );
      setFilteredGames(filtered);
    }
  };



  return (
    <div className="schedule">
      <h2>Full Schedule</h2>

      <select value={selectedTeam} onChange={handleTeamChange}>
        <option value="">All Teams</option>
        <option value="Yetis">Yetis</option>
        <option value="Hellfish D5+">Hellfish D5+</option>
        <option value="Hellfish D5">Hellfish D5</option>
        <option value="Dek Daddies D6+">Dek Daddies D6+</option>
      </select>

      {filteredGames.length > 0 ? (
<ul className="schedule-game-list">
  {filteredGames.map((game, index) => (
    <li key={index}>
      <strong>{game.date}</strong>
      <span>{game.time}: {game.team} vs. {game.opponent}</span>
    </li>
  ))}
</ul>

      ) : (
        <p>No games to show.</p>
      )}
    </div>
  );
}

export default Schedule;

