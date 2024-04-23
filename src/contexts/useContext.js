import { createContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getUser, getActivity, getAverageSessions, getPerformance } from "../api/fetchApi";
import PropsTypes from "prop-types";

const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [activity, setActivity] = useState(null);
  const [averageSessions, setAverageSessions] = useState(null);
  const [performance, setPerformance] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const userData = await getUser(id);
      setUser(userData);
      const activityData = await getActivity(id);
      setActivity(activityData);
      const averageSessionsData = await getAverageSessions(id);
      setAverageSessions(averageSessionsData);
      const performanceData = await getPerformance(id);
      setPerformance(performanceData);
    };
    fetchData();
  }, [id]);

  return (
    <ApiContext.Provider
      value={{
        user,
        activity,
        averageSessions,
        performance,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

ApiProvider.propTypes = {
  children: PropsTypes.node.isRequired,
};