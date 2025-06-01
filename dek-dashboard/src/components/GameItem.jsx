import './GameItem.css';

function GameItem({ game, showAddStat }) {
  return (
    <div className="game-item">
      <div className="game-info">
        <h3>{game.team} vs {game.opponent}</h3>
        <p>{game.date} – {game.time}</p>
      </div>
      {showAddStat && (
        <button className="add-stat-btn" onClick={() => alert('Add stat logic goes here')}>
          ＋
        </button>
      )}
    </div>
  );
}

export default GameItem;
