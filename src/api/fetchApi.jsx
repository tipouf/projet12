import FormatData from "../utils/formData.js";

const url = "http://localhost";
const port = "3000";

const getUser = async (id) => {
  try {
    const response = await fetch(`${url}:${port}/user/${id}`);
    const { data } = await response.json();

    return new FormatData(data).FormatUserData()
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getActivity = async (id) => {
  try {
    const response = await fetch(`${url}:${port}/user/${id}/activity`);
    const { data } = await response.json();
    return new FormatData(data).FormatActivityData();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getAverageSessions = async (id) => {
  try {
    const response = await fetch(`${url}:${port}/user/${id}/average-sessions`);
    const { data } = await response.json();

    return new FormatData(data).FormatAverageSessionsData();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getPerformance = async (id) => {
  try {
    const response = await fetch(`${url}:${port}/user/${id}/performance`);
    const { data } = await response.json();

    return new FormatData(data).FormatPerformanceData();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export { getUser, getActivity, getAverageSessions, getPerformance };
