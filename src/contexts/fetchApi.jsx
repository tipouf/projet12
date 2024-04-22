const url = "https://localhost";
const port = 3000;

/**
 * Retrieves user data from the server based on the provided ID.
 *
 * @param {number} id - The ID of the user.
 * @return {Promise<Object>} A promise that resolves to the user data.
 */
const getUser = async (id) => {
  try {
    const response = await fetch(`${url}:${port}/user/${id}`);
    const userData = await response.json();
    return userData;
  } catch (error) {
    console.log(`Error: ${error} for user id: ${id}`);
  }
};

/**
 * Retrieves the activity data for a given ID.
 *
 * @param {number} id - The ID of the activity.
 * @return {Promise<any>} The activity data.
 */
const getActivity = async (id) => {
  try {
    const response = await fetch(`${url}:${port}/${id}/activity`);
    const activityData = await response.json();
    return activityData;
  } catch (error) {
    console.log(`Error: ${error} for user id: ${id}`);
  }
};

/**
 * Retrieves the average sessions data for a given ID.
 *
 * @param {number} id - The ID of the user.
 * @return {Promise<Object>} A promise that resolves to the average sessions data.
 */
const getAverageSessions = async (id) => {
  try {
    const response = await fetch(`${url}:${port}/${id}/average-sessions`);
    const averageSessionsData = await response.json();
    return averageSessionsData;
  } catch (error) {
    console.log(`Error: ${error} for user id: ${id}`);
  }
};

/**
 * Retrieves the performance data for a given ID.
 *
 * @param {number} id - The ID of the user.
 * @return {Promise<Object>} A promise that resolves to the performance data.
 */
const getPerformance = async (id) => {
  try {
    const response = await fetch(`${url}:${port}/${id}/performance`);
    const performanceData = await response.json();
    return performanceData;
  } catch (error) {
    console.log(`Error: ${error} for user id: ${id}`);
  }
};

export { getUser, getActivity, getAverageSessions, getPerformance };
