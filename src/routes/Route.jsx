import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
};

export default AllRoutes;
