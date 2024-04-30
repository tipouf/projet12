import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard";
import { Activity, AverageSessions } from "../components";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/user/:id" element={<Dashboard />} />
      <Route path="/user/:id/activity" element={< Activity />} />
      <Route path="/user/:id/average-sessions" element={<AverageSessions />} />
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
};

export default AllRoutes;
