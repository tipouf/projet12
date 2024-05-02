import {NumberToDay, GetDay} from '../utils/date.js'
const url = "http://localhost";
const port = "3000";

const getUser = async (id) => {
  try {
    const response = await fetch(`${url}:${port}/user/${id}`);
    const { data } = await response.json();
    const { userInfos } = data;
    return userInfos;
  } catch (error) {
    console.error(error);
    throw error;
  }
};


const getActivity = async (id) => {
  try {
    const response = await fetch(`${url}:${port}/user/${id}/activity`);
    const { data } = await response.json();
    const { sessions } = data;
    const activity = sessions.map((session) => {
      return {
        ...session,
        day: GetDay(session.day)
      };
    });

    return activity;
  } catch (error) {
    console.error(error);
    throw error;
  }
};


const getAverageSessions = async (id) => {
  try {
    const response = await fetch(`${url}:${port}/user/${id}/average-sessions`);
    const { data } = await response.json();
    const averageSessions = data.sessions.map((session) => {
      return {
        ...session,
        day: NumberToDay(session.day),
      };
    });

    return averageSessions;
  } catch (error) {
    console.error(error);
    throw error;
  }
};


const getPerformance = async (id) => {
  try {
    const response = await fetch(`${url}:${port}/user/${id}/performance`);
    const dataResponse = await response.json();
    const { data: performance } = dataResponse;
    return performance;
  } catch (error) {
    console.error(error);
    throw error;
  }
};


export { getUser, getActivity, getAverageSessions, getPerformance };
