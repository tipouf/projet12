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
  Legend,
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
  const { activity, setId } = useContext(ApiContext);

  const { id } = useParams();
  useEffect(() => {
    setId(id);
  }, [id, setId]);

  return (
    <div className="activity">
      <div className="activity__title">Activité quotidienne</div>
      <ResponsiveContainer width="100%" height="80%" id="activity">
        <BarChart data={activity} barSize={7} barGap={8}>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="white"
            vertical={false}
          />
          <XAxis
            dataKey="day"
            tick={{ fill: "#9B9EAC" }}
            tickMargin={12}
            tickLine={false}
            stroke="#DEDEDE"
            strokeWidth={2}
          />
          <YAxis
            dataKey={"calories"}
            type="number"
            orientation="right"
            tick={{ fill: "#9B9EAC", fontSize: 24 }}
            // tickLine={{ fill: "#9B9EAC" }}
            axisLine={false}
            tickCount={3}
            domain={["dataMin - 150", "dataMax"]}
            tickLine={false}
          />
          <YAxis yAxisId="kilogram" hide />
          <Tooltip
            content={<ActivityTooltip />}
            wrapperStyle={{ x: -200, y: -250 }}
          />
          {/* <Legend wrapperStyle={{ fontSize: 24, color: "#9B9EAC" }} /> */}
          <Bar
            dataKey="kilogram"
            name={"Poids (kg)"}
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
          <Legend
            verticalAlign="top"
            align="right"
            iconType="circle"
            iconSize={10}
            height={50}
            wrapperStyle={{ fontSize: 24, color: "#9B9EAC" }}
            payload={[
              {
                id: "kilogram",
                value: "Poids (kg)",
                type: "circle",
                fill: "#282D30",
              },
              {
                id: "calories",
                value: "Calories brûlées (kCal)",
                type: "circle",
                fill: "#E60000",
                className: "calories",
              },
            ]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

ActivityTooltip.propTypes = {
  active: PropsTypes.bool,
  payload: PropsTypes.array,
};

export default Activity;
