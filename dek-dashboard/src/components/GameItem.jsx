import './GameItem.css';

//displays todays games on dashboard with an add stats button
function GameItem({ game, showAddStat }) {
  return (
    <div className="game-item">
      <div className="game-info">
        <h3>{game.team} vs {game.opponent}</h3>
        <p>{game.date} – {game.time}</p>
      </div>
     {showAddStat && (
  <a href="#/stats" className="add-stat-btn" aria-label="Add stats">
  <span className="plus-icon">+</span>
</a>
)}

    </div>
  );
}

export default GameItem;
