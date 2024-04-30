import {NumberToDay} from '../utils/date.js'
const url = "http://localhost";
const port = "3000";

const getUser = async (id) => {
  const response = await fetch(`${url}:${port}/user/${id}`);
  const { data } = await response.json();
  const { userInfos } = data;
  return userInfos;
};

const getActivity = async (id) => {
  const response = await fetch(`${url}:${port}/user/${id}/activity`);
  const { data } = await response.json();
  const { sessions } = data;
  const activity = sessions.map((session) => {
    return {
      ...session,
      day:
        new Date(session.day).getDate() < 10
          ? new Date(session.day).toLocaleDateString().slice(1, 2)
          : new Date(session.day).toLocaleDateString().slice(0, 2),
    };
  });

  return activity;
};

const getAverageSessions = async (id) => {
  const response = await fetch(`${url}:${port}/user/${id}/average-sessions`);
  const {data} = await response.json();
  const averageSessions = data.sessions.map((session) => {
    return {
      ...session,
      day: NumberToDay(session.day),
    };
  })
  return averageSessions;
};

const getPerformance = async (id) => {
  const response = await fetch(`${url}:${port}/user/${id}/performance`);
  const data = await response.json();
  const { data: performance } = data;

  return performance;
};

export { getUser, getActivity, getAverageSessions, getPerformance };
