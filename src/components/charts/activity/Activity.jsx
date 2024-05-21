import { useContext, useEffect } from "react";
import { ApiContext } from "../../../providers/useContext";
import { useParams } from "react-router-dom";
import { icon, iconRed } from "../../../assets/index.js";
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
      <div className="activity-tooltips">
        <p className="activity-tooltips__value">{payload[0].value}kg</p>
        <p>{payload[1].value}Kcal</p>
      </div>
    );
  }
  return null;
};

const LegendContent = () => {
  return (
    <p className="legend-content">
      <img src={icon} alt="icon" className="legend-icon" />
      <span> Poids (kg)</span>
      <img src={iconRed} alt="icon" className="legend-icon red" />
      <span> Calories brulées (kCal)</span>
    </p>
  );
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
      <div className="legend-container">
        <Legend
          iconType="circle"
          iconSize={10}
          layout="vertical"
          verticalAlign="middle"
          align="right"
          content={<LegendContent />}
        />
      </div>

      <ResponsiveContainer
        width="100%"
        height="80%"
        className={"activity__chart"}
      >
        <BarChart data={activity} barGap={8} barCategoryGap={1}>
          <CartesianGrid vertical={false} strokeDasharray="1 1" />
          <XAxis
            dataKey="day"
            tickLine={false}
            tick={{ fontSize: 14, fill: "#9B9EAC" }}
            dy={15}
            stroke="1 1"
            padding={{ left: -40, right: -40 }}
          />
          <YAxis
            yAxisId="kilogram"
            dataKey="kilogram"
            type="number"
            domain={["dataMin - 2", "dataMax + 1"]}
            tickCount="4"
            axisLine={false}
            orientation="right"
            tickLine={false}
            tick={{ fontSize: 14, fill: "#9B9EAC" }}
            dx={15}
          />
          <YAxis
            yAxisId="calories"
            dataKey="calories"
            type="number"
            domain={["dataMin - 20", "dataMax + 10"]}
            hide={true}
          />
          <Tooltip
            content={<ActivityTooltip />}
            cursor={{ fill: "rgba(0,0,0,0.1)" }}
            wrapperStyle={{ outline: "none" }}
            offset={-50}
            itemStyle={{ display: "none" }}
          />
          <Bar
            yAxisId="kilogram"
            dataKey="kilogram"
            fill="#282D30"
            barSize={7}
            radius={[50, 50, 0, 0]}
          />
          <Bar
            yAxisId="calories"
            dataKey="calories"
            fill="#E60000"
            barSize={7}
            radius={[50, 50, 0, 0]}
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
