const url = "http://localhost";
const port = "3000";



const getUser = async (id) => {
  const response = await fetch(`${url}:${port}/user/${id}`);
  const user = await response.json();
  return user;
};


const getActivity = async (id) => {
  const response = await fetch(`${url}:${port}/user/${id}/activity`);
  const activity = await response.json();
  return activity;
};


const getAverageSessions = async (id) => {
  const response = await fetch(
    `${url}:${port}/user/${id}/average-sessions`
  );
  const averageSessions = await response.json();
  return averageSessions;
};


const getPerformance = async (id) => {
  const response = await fetch(`${url}:${port}/user/${id}/performance`);
  const performance = await response.json();
  return performance;
};

export { getUser, getActivity, getAverageSessions, getPerformance };
