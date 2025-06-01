import GameItem from './GameItem';
import './GameList.css';

//displays list of games
function GameList({ games, showAddStat = false }) {
  return (
    <div className="game-list">
      {games.map((game) => {
        const uniqueKey = `${game.date}-${game.time}-${game.team}-${game.opponent}`;
        return <GameItem key={uniqueKey} game={game} showAddStat={showAddStat} />;
      })}
    </div>
  );
}

export default GameList;