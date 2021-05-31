export default function StatisticsCard({ data, params, title }) {
  console.log(data);
  return (
    <div className="statistics-card">
      <h2 className="statistics-card-title">{title}/games</h2>
      <ul className="list-hamster">
        {data.map((item, index) => {
          index += 1;
          return (
            <li className="hamster">
              <span>
                {index}. {item.name}
              </span>
              <span>
                - {item[params]}/{item.games}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
