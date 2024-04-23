const url = "http://localhost";
const port = "3000";

/**
 * Fetches a user from the API based on their ID.
 *
 * @param {number} id - The ID of the user to fetch.
 * @return {Promise<Object>} A Promise that resolves to the user object.
 */
const getUser = async (id) => {
  const response = await fetch(`http://${url}:${port}/user/${id}`);
  const user = await response.json();
  return user;
};

/**
 * Fetches the activity data for a user based on their ID.
 *
 * @param {number} id - The ID of the user to fetch activity data for.
 * @return {Promise<Object>} A Promise that resolves to the user's activity data.
 */
const getActivity = async (id) => {
  const response = await fetch(`http://${url}:${port}/user/${id}/activity`);
  const activity = await response.json();
  return activity;
};

/**
 * Fetches the average sessions data for a user based on their ID.
 *
 * @param {number} id - The ID of the user to fetch average sessions data for.
 * @return {Promise<Object>} A Promise that resolves to the user's average sessions data.
 */
const getAverageSessions = async (id) => {
  const response = await fetch(
    `http://${url}:${port}/user/${id}/average-sessions`
  );
  const averageSessions = await response.json();
  return averageSessions;
};

/**
 * Fetches the performance data for a user based on their ID.
 *
 * @param {number} id - The ID of the user to fetch performance data for.
 * @return {Promise<Object>} A Promise that resolves to the user's performance data.
 */
const getPerformance = async (id) => {
  const response = await fetch(`http://${url}:${port}/user/${id}/performance`);
  const performance = await response.json();
  return performance;
};

export { getUser, getActivity, getAverageSessions, getPerformance };
