import { useEffect, useState } from 'react';
import GameList from '../components/GameList';
import './Dashboard.css';

function Dashboard() {
  const [gamesToday, setGamesToday] = useState([]);
  const [recentStats, setRecentStats] = useState([]);

  // Dummy data for now
  useEffect(() => {
    setGamesToday([
      {
        id: 1,
        team: 'Penguins',
        opponent: 'Sharks',
        time: '6:00 PM',
        date: 'Today',
      },
    ]);

    setRecentStats([
      {
        id: 101,
        team: 'Penguins',
        goals: 2,
        assists: 1,
        date: '5/29/2025',
      },
    ]);
  }, []);

  return (
    <div className="dashboard-container">
      <h2>Today’s Game</h2>
      {gamesToday.length > 0 ? (
        <GameList games={gamesToday} showAddStat={true} />
      ) : (
        <p>No games today</p>
      )}

      <h2>Weekly Schedule</h2>
      <p>[ Preview of weekly schedule here – link to full schedule page ]</p>

      <h2>Recent Stats</h2>
      {recentStats.length > 0 ? (
        <ul className="stat-list">
          {recentStats.map((stat) => (
            <li key={stat.id}>
              {stat.team} – {stat.goals}G / {stat.assists}A ({stat.date})
            </li>
          ))}
        </ul>
      ) : (
        <p>No stats to show yet</p>
      )}
    </div>
  );
}

export default Dashboard;
