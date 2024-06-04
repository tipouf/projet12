import { useContext, useEffect, useMemo } from "react";
import { ApiContext } from "../../../providers/useContext";
import { useParams } from "react-router-dom";
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

  return (
    <ResponsiveContainer
      width="100%"
      height="100%"
      className="radar"
      id="radar"
    >
      {performance ? 
      <RadarChart outerRadius="69%" data={performance}>
        <PolarGrid radialLines={false}
          strokeWidth={2} />
        <PolarAngleAxis
          dataKey="kind"
          stroke="white"
          tickLine={false}
          dy={4}
          style={{ fontSize: '12px' }}
        />
        <Radar
          dataKey="value"
          fill="#FF0101B2"
        />
      </RadarChart>
      : <div className="no-data">Pas de donnees</div>}
    </ResponsiveContainer>
  );
};

export default RadarChartComponent;

