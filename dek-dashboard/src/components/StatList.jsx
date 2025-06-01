import './StatList.css';

function StatList({ stats }) {
  return (
    <ul className="stat-list">
      {stats.map((stat) => (
        <li key={stat.id} className="stat-item">
          <strong>{stat.team}</strong> – {stat.goals} G / {stat.assists} A on {stat.date}
        </li>
      ))}
    </ul>
  );
}

export default StatList;
