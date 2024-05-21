import FormatData from "../utils/formData.js";
import mockData from "../api/mock.json";

const url = "http://localhost";
const port = "3000";

let mock = false;
const getMock = (value) => {
  if (value === undefined) return mock;
  mock = value;
};

const getUser = async (id) => {
  try {
    const mockedUser = mockData.USER_MAIN_DATA.find(
      (user) => user.id.toString() === id.toString()
    );
    
    const response = await (mock ? Promise.resolve(mockedUser) : fetch(`${url}:${port}/user/${id}`));
    const data = mock ? mockedUser : (await response.json()).data;

    return new FormatData(data).FormatUserData()
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getActivity = async (id) => {
  try {
    const mockedActivity = mockData.USER_ACTIVITY.find(
      (activity) => activity.userId.toString() === id.toString()
    );
    const response = await (mock ? Promise.resolve(mockedActivity) : fetch(`${url}:${port}/user/${id}/activity`));
    const data = mock ? mockedActivity : (await response.json()).data;

    return new FormatData(data).FormatActivityData();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getAverageSessions = async (id) => {
  try {
    const mockedAverageSessions = mockData.USER_AVERAGE_SESSIONS.find(
      (averageSessions) => averageSessions.userId.toString() === id.toString()
    );

    const response = await (mock ? Promise.resolve(mockedAverageSessions) : fetch(`${url}:${port}/user/${id}/average-sessions`));
    const data = mock ? mockedAverageSessions : (await response.json()).data;

    return new FormatData(data).FormatAverageSessionsData();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getPerformance = async (id) => {
  try {
    const mockedPerformance = mockData.USER_PERFORMANCE.find(
      (performance) => performance.userId.toString() === id.toString()
    );

    const response = await (mock ? Promise.resolve(mockedPerformance) : fetch(`${url}:${port}/user/${id}/performance`));
    const data = mock ? mockedPerformance : (await response.json()).data;

    return new FormatData(data).FormatPerformanceData();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export { getUser, getActivity, getAverageSessions, getPerformance, getMock };
