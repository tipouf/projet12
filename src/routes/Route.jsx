import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard";
import Error404 from "../pages/error/Error404";
import { Activity, AverageSessions, RadarChart } from "../components";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/user/12" />} />
      <Route path="/user/:id" element={<Dashboard />} />
      <Route path="/profil/:id" element={<Dashboard />} />
      <Route path="/user/:id/activity" element={< Activity />} />
      <Route path="/user/:id/average-sessions" element={<AverageSessions />} />
      <Route path="/user/:id/performance" element={<RadarChart />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default AllRoutes;
