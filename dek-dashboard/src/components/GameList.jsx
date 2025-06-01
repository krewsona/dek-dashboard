import GameItem from './GameItem';
import './GameList.css';

function GameList({ games, showAddStat = false }) {
  return (
    <div className="game-list">
      {games.map((game) => (
        <GameItem key={game.id} game={game} showAddStat={showAddStat} />
      ))}
    </div>
  );
}

export default GameList;
