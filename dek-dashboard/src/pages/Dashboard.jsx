import { useState, useEffect } from 'react';
import GameList from '../components/GameList';
import './Dashboard.css';

function Dashboard() {
  const [gamesToday, setGamesToday] = useState([]);
  const [weeklyGames, setWeeklyGames] = useState([]);
  const [recentStats, setRecentStats] = useState([]);


  useEffect(() => {
    fetch('/scheduleData.json')
      .then((res) => res.json())
      .then((data) => {

        // get today's date
        const today = new Date();
        const todayStr = today.toISOString().split('T')[0];

        // Get one week from today
        const oneWeekLater = new Date();
        oneWeekLater.setDate(today.getDate() + 7);

        // filter today's games
        const todayGames = data.filter(
          (game) => game.date === todayStr
        );
        setGamesToday(todayGames);

        // filter weekly games
        const weekGames = data.filter((game) => {
          const gameDate = new Date(game.date);
          return gameDate >= today && gameDate <= oneWeekLater;
        });
        setWeeklyGames(weekGames);

        // load recent stats from local storage
        const savedStats = JSON.parse(localStorage.getItem('userStats')) || [];
        const sortedStats = savedStats.sort((a, b) => new Date(b.date) - new Date(a.date));
        setRecentStats(sortedStats.slice(0, 5));
      })
      .catch((err) => console.error('Failed to load games', err));
  }, []);

  return (
    <div className="dashboard">
      <section className="dashboard-top">
        <h2>Today’s Game(s)</h2>
        {gamesToday.length > 0 ? (
          <GameList games={gamesToday} showAddStat={true} />
        ) : (
          <p>No games today.</p>
        )}
      </section>

      <section className="dashboard-bottom">
        <div className="dashboard-box left">
          <h3>Weekly Schedule</h3>
          <GameList games={weeklyGames} />
        </div>

<div className="dashboard-box right">
  <div className="stat-header">
    <h3>Recent Stats</h3>
<a href="#/stats" className="add-stats-link">
  <span className="plus-icon">+</span> Add Stats
</a>
  </div>
  {recentStats.length > 0 ? (
    <ul className="stat-list">
      {recentStats.map((stat) => (
        <li key={stat.date + stat.team}>
          <strong>{stat.team}</strong>: {stat.goals} Goal(s) / {stat.assists} Assist(s) on {stat.date}
        </li>
      ))}
    </ul>
  ) : (
    <p>No stats to show.</p>
  )}
</div>
      </section>
    </div>
  );
}

export default Dashboard;
