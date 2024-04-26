import { useContext } from "react";
import { ApiContext } from "../../../providers/useContext";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./Activity.scss";

const Activity = () => {
  const { activity } = useContext(ApiContext);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart width={500} height={300} data={activity}>
        <CartesianGrid strokeDasharray="3 3" stroke="white" vertical={false} />
        <XAxis 
          dataKey="day"
          tick={{ fill: "#9B9EAC", fontSize: 24 }}
          tickLine={{ fill: "#9B9EAC" }}
          axisLine={{ stroke: "#9B9EAC" }}
          />
        <YAxis 
          dataKey={"calories"}
          tick={{ fill: "#9B9EAC", fontSize: 24 }}
          tickLine={{ fill: "#9B9EAC" }}
          axisLine={{ stroke: "#9B9EAC" }}
        
        />
        <Tooltip 
          contentStyle={{ backgroundColor: "#282D30", color: "white" }}
          itemStyle={{ color: "white" }}
          cursor={false}
        />
        <Legend 
          wrapperStyle={{ fontSize: 24, color: "#9B9EAC" }}/>
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
  );
};

export default Activity;
