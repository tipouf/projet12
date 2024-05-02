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
  const { averageSessions , setId } = useContext(ApiContext);

  const { id } = useParams();
  useEffect(() => {
    setId(id);
  }, [id, setId]);

  return (
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
        }}
      >
        <XAxis
          dataKey="day"
          tick={{ fill: "#9B9EAC", fontSize: 24 }}
          axisLine={false}
          
        />
        <Legend iconType="circle" verticalAlign="top" />
        <Line
          type="monotone"
          dataKey="sessionLength"
          stroke="white"
          dot={false}
          strokeWidth={2}
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default AverageSessions;