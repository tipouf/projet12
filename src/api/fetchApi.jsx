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
const getMock = (value = mock) => (mock = value);

/**
 * Retrieves user data by ID.
 *
 * @param {string} id - The ID of the user.
 * @return {Promise<object>} A Promise that resolves to the formatted user data.
 */
const getUser = async (id) => {
  try {
    const data = mock
      ? mockData.USER_MAIN_DATA.find(
          (user) => user.id.toString() === id.toString()
        )
      : (await fetch(`${url}:${port}/user/${id}`).then((res) => res.json()))
          .data;

    if (!data) throw new Error("No User data found");

    return new FormatData(data).FormatUserData();
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
    const data = mock
      ? mockData.USER_ACTIVITY.find(
          (activity) => activity.userId.toString() === id.toString()
        )
      : (
          await fetch(`${url}:${port}/user/${id}/activity`).then((res) =>
            res.json()
          )
        ).data;

    if (!data) throw new Error("No Activity data found");

    return new FormatData(data).FormatActivityData();
  } catch (error) {
    console.error("error", error.message);
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
    const { data } = await (mock
      ? Promise.resolve({
          data: mockData.USER_AVERAGE_SESSIONS.find(
            (averageSessions) =>
              averageSessions.userId.toString() === id.toString()
          ),
        })
      : await fetch(`${url}:${port}/user/${id}/average-sessions`).then((res) =>
          res.json()
        ));

    if (!data) throw new Error("No Average Sessions data found");

    return new FormatData(data).FormatAverageSessionsData();
  } catch (error) {
    console.error(error.message);
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
    const data = mock
      ? mockData.USER_PERFORMANCE.find(
          (performance) => performance.userId.toString() === id.toString()
        )
      : (
          await fetch(`${url}:${port}/user/${id}/performance`).then((res) =>
            res.json()
          )
        ).data;

    return new FormatData(data).FormatPerformanceData();
  } catch (error) {
    console.error(error);
  }
};

export { getUser, getActivity, getAverageSessions, getPerformance, getMock };
