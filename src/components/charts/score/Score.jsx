import "./Score.scss";
import PropsTypes from "prop-types";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
const Score = ({ todayScore }) => {
  console.log(todayScore);
  return (
    <>
      {todayScore ? (
        <div className="score">
          <p className="score__value">{todayScore * 100}%</p>
          <p className="score__text">de votre</p>
          <p className="score__text">objectif</p>
        </div>
      ) : (
        <div className="score">
          <p className="score__value">Aucun</p>
          <p className="score__text">score</p>
        </div>
      )}

      <ResponsiveContainer className={"score__chart"}>
        <PieChart>
          <Pie
            dataKey="value"
            data={[
              { name: "score", value: todayScore * 100 },
              { name: "remaining", value: (1 - todayScore) * 100 },
            ]}
            innerRadius={72}
            outerRadius={84}
          >
            <Cell key="score" fill="#E60000" cornerRadius={50}
              stroke="white" strokeWidth={3} />
            <Cell key="remaining" fill="#FFFFFF"
              stroke="white"
              strokeWidth={2}
            />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </>
  );
};

Score.propTypes = {
  todayScore: PropsTypes.number,
};

export default Score;
