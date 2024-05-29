import "./Score.scss";
import PropsTypes from "prop-types";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
const Score = ({ todayScore }) => {
  
  return (
    <div className="score-container">
      <div className="score-container__title">Score</div>

      <div className="score">
        {todayScore ? (
          <>
            <p className="score__value">{todayScore * 100}%</p>
            <p className="score__text">de votre</p>
            <p className="score__text">objectif</p>
          </>
        ) : (
          <>
            <p className="score__value">Aucun</p>
            <p className="score__text">score</p>
          </>
        )}
      </div>

      <ResponsiveContainer className="chart">
        <PieChart>
          <Pie
            dataKey="value"
            data={[
              { name: "score", value: todayScore * 100 },
              { name: "remaining", value: (1 - todayScore) * 100 },
            ]}
            startAngle={80}
            innerRadius={72}
            outerRadius={84}
          >
            <Cell
              key="score"
              fill="#E60000"
              cornerRadius={50}
              stroke="white"
              strokeWidth={3}
            />
            <Cell
              key="remaining"
              fill="#FBFBFB"
            />
          </Pie>
        </PieChart>
        <PieChart className="backchart">
          <Pie
            dataKey="value"
            data={[
              { name: "score", value: todayScore * 100 }
            ]}
            startAngle={0}
            outerRadius={72}
          >
            <Cell
              key="score"
              fill="white"
              cornerRadius={50}
              stroke="white"
            />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

Score.propTypes = {
  todayScore: PropsTypes.number,
};

export default Score;
