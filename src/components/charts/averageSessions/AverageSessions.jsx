import { useContext, useEffect } from "react";
import PropsTypes from "prop-types";
import { ApiContext } from "../../../providers/useContext";
import { useParams } from "react-router-dom";
import "./AverageSessions.scss";
import { ResponsiveContainer, LineChart, Line, XAxis, Tooltip } from "recharts";

const ActivityTooltip = ({ active, payload }) => {
  if (active) {
    return (
      <div className="activity-tooltip">
        <p className="activity-tooltip__value">{payload[0].value} min</p>
      </div>
    );
  }
  return null;
};

const AverageSessions = () => {
  const { averageSessions, setId } = useContext(ApiContext);

  const { id } = useParams();
  useEffect(() => {
    setId(id);
  }, [id, setId]);

  return (
    <div className="average-sessions">
      <div className="average-sessions__title">
        <div className="average-sessions__title_line">Durée moyennes des</div>
        <div className="average-sessions__title_line">sessions</div>
      </div>
      <ResponsiveContainer
        width="100%"
        height="100%"
        className="average-sessions"
        id="average-sessions"
      >
        <LineChart
          data={averageSessions}
          margin={{
            top: 50,
            right: 20,
            left: 20,
            bottom: 10,
          }}
          style={{
            opacity: 0.8,
          }}
          onMouseMove={(e) => console.log(e)}
        >
          <XAxis
            dataKey="day"
            tick={{ fill: "white", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip content={<ActivityTooltip />} />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="white"
            dot={false}
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

ActivityTooltip.propTypes = {
  active: PropsTypes.bool,
  payload: PropsTypes.array,
};

export default AverageSessions;
