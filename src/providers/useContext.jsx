import { createContext, useState, useMemo, useEffect } from "react";
import PropsType from "prop-types";
import {
  getAverageSessions,
  getActivity,
  getPerformance,
  getUser,
  getMock
} from "../api/fetchApi";

export const ApiContext = createContext(null);

export const ApiProvider = ({ children }) => {
  const [mock, setMock] = useState(true);
  const [id, setId] = useState(null);
  const [user, setUser] = useState(null);
  const [averageSessions, setAverageSessions] = useState(null);
  const [activity, setActivity] = useState(null);
  const [performance, setPerformance] = useState(null);

  

  useEffect(() => {
    if (!id) return;
    const fetchData = async () => {
      getMock(mock);
      const user = await getUser(id);
      const averageSessions = await getAverageSessions(id);
      const activity = await getActivity(id);
      const performance = await getPerformance(id);
      setUser(user);
      setAverageSessions(averageSessions);
      setActivity(activity);
      setPerformance(performance);
    };

    fetchData();
  }, [id, mock]);

  const value = useMemo(
    () => ({
      id,
      setId,
      mock,
      setMock,
      user,
      averageSessions,
      activity,
      performance,
    }),
    [id, user, averageSessions, activity, performance, mock]
  );

  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
};

ApiProvider.propTypes = {
  children: PropsType.node.isRequired,
};
