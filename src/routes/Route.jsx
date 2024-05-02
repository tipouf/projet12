import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard";
import { Activity, AverageSessions, RadarChart } from "../components";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/user/12" />} />
      <Route path="/user/:id" element={<Dashboard />} />
      <Route path="/user/:id/activity" element={< Activity />} />
      <Route path="/user/:id/average-sessions" element={<AverageSessions />} />
      <Route path="/user/:id/radar" element={<RadarChart />} />
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
};

export default AllRoutes;
