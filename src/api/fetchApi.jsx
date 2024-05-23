import FormatData from "../utils/formData.js";
import mockData from "../api/mock.json";

/**
 *  Variables
 */

const url = "http://localhost";
const port = "3000";
let mock = true;

/**
 * Sets the mock value.
 *
 * @param {boolean} [value=mock] - The new mock value.
 * @returns mock
 */
const getMock = (value = mock) => mock = value;

/**
 * Retrieves user data by ID.
 *
 * @param {string} id - The ID of the user.
 * @return {Promise<object>} A Promise that resolves to the formatted user data.
 */
const getUser = async (id) => {
  try {
    const mockedUser = mockData.USER_MAIN_DATA.find(
      (user) => user.id.toString() === id.toString()
    );
    
    const response = await (mock ? Promise.resolve(mockedUser) : fetch(`${url}:${port}/user/${id}`));
    if (response === undefined || response === null) {
      throw new Error("No data");
    }
    const data = mock ? mockedUser : (await response.json()).data;
    return new FormatData(data).FormatUserData()
  } catch (error) {
    console.error("error", error);
  }
};

/**
 * Retrieves the activity data for a user with the specified ID.
 *
 * @param {string} id - The ID of the user.
 * @return {Promise<object>} A Promise that resolves to the formatted activity data for the user.
 */
const getActivity = async (id) => {
  try {
    const mockedActivity = mockData.USER_ACTIVITY.find(
      (activity) => activity.userId.toString() === id.toString()
    );
    const response = await (mock ? Promise.resolve(mockedActivity) : fetch(`${url}:${port}/user/${id}/activity`));
    const data = mock ? mockedActivity : (await response.json()).data;
    return new FormatData(data).FormatActivityData();
  } catch (error) {
    console.error("error");
  }
};

/**
 * Retrieves the average sessions data for a user by ID.
 *
 * @param {string} id - The ID of the user.
 * @return {Promise<object>} A Promise that resolves to the formatted average sessions data.
 */
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
  }
};

/**
 * Retrieves the performance data for a user by ID.
 *
 * @param {string} id - The ID of the user.
 * @return {Promise<object>} A Promise that resolves to the formatted performance data for the user.
 */
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
  }
};

export { getUser, getActivity, getAverageSessions, getPerformance, getMock };
