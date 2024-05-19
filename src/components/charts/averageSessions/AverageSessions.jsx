import { useContext, useEffect } from "react";
import { ApiContext } from "../../../providers/useContext";
import { useParams } from "react-router-dom";
import "./AverageSessions.scss";
import PropsTypes from "prop-types";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  // CartesianGrid,
  // Tooltip,
  Legend,
} from "recharts";

const AverageSessions = () => {
  const { averageSessions, setId } = useContext(ApiContext);

  const { id } = useParams();
  useEffect(() => {
    setId(id);
  }, [id, setId]);

  console.log(averageSessions);

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
            bottom: 20,
          }}
        >
          <XAxis
            dataKey="day"
            tick={{ fill: "#9B9EAC", fontSize: 24 }}
            axisLine={false}
            tickLine={false}
          />
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

export default AverageSessions;
