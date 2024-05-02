import { useContext, useEffect, useMemo } from "react";
import { ApiContext } from "../../../providers/useContext";
import { useParams } from "react-router-dom";
import PropsTypes from "prop-types";
import "./Radar.scss";
import {
  Radar,
  RadarChart,
  ResponsiveContainer,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

const RadarChartComponent = () => {
  const { performance, setId } = useContext(ApiContext);
  const { id } = useParams();
  useEffect(() => {
    setId(id);
  }, [id, setId]);

  const dataPerformance = useMemo(() => {
    if (!performance) return null;
    const data = performance.data;
    return data;
  }, [performance]);


  return (
    <ResponsiveContainer
      width="100%"
      height="100%"
      className="rounded-md bg-[#282D30]"
    >
      <RadarChart outerRadius="69%" data={dataPerformance}>
        <PolarGrid radialLines={false} />
        <PolarAngleAxis
          dataKey="kind"
          className="text-[12px] text-white"
          stroke="white"
          tickLine={false}
          dy={4}
          tickSize={15}
        />
        <PolarRadiusAxis tick={false} axisLine={false} />
        <Radar
          dataKey="value"
          fill="#FF0101B2"
          fillOpacity={1}
          stroke="#FF0101B2"
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default RadarChartComponent;

