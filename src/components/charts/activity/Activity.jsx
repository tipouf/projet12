import { useContext, useEffect } from "react";
import { ApiContext } from "../../../providers/useContext";
import { useParams } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./Activity.scss";
import PropsTypes from "prop-types";

const ActivityTooltip = ({ active, payload }) => {
  if (active) {
    return (
      <div className="activity-tooltip">
        <p className="activity-tooltip__value">{payload[0].value}kg</p>
        <p>{payload[1].value}Kcal</p>
      </div>
    );
  }
  return null;
};
const Activity = () => {
  const { activity , setId } = useContext(ApiContext);

  const { id } = useParams();
  useEffect(() => {
    setId(id);
  }, [id, setId]);


  return (
    <>
      <h1>Activité quotidienne</h1>
      <ResponsiveContainer
        width="100%"
        height="80%"
        id="activity"
      >
        <BarChart width={500} height={300} data={activity}>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="white"
            vertical={false}
          />
          <XAxis
            dataKey="day"
            tick={{ fill: "#9B9EAC", fontSize: 24 }}
            axisLine={{ stroke: "#9B9EAC" }}
          />
          <YAxis
            dataKey={"calories"}
            orientation="right"
            tick={{ fill: "#9B9EAC", fontSize: 24 }}
            // tickLine={{ fill: "#9B9EAC" }}
            axisLine={false}
            tickCount={3}
          />
          <Tooltip
            content={<ActivityTooltip />}
            wrapperStyle={{ x: -200, y: -250 }}
          />
          {/* <Legend wrapperStyle={{ fontSize: 24, color: "#9B9EAC" }} /> */}
          <Bar
            dataKey="kilogram"
            fill="#282D30"
            barSize={10}
            radius={[10, 10, 0, 0]}
          />
          <Bar
            dataKey="calories"
            fill="#E60000"
            barSize={10}
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

ActivityTooltip.propTypes = {
  active: PropsTypes.bool,
  payload: PropsTypes.array,
};

export default Activity;
