import { NumberToDay, NumberToKind, GetDay } from "../utils/utils.js";
const url = "http://localhost";
const port = "3000";
import { apple, burger, hot, meat } from "../assets/index.js";

const getUser = async (id) => {
  try {
    const response = await fetch(`${url}:${port}/user/${id}`);
    const { data } = await response.json();
    const { userInfos, keyData, todayScore } = data;

    return {
      ...userInfos,
      todayScore,
      keyData: [
        {
          id: 1,
          name: "calorieCount",
          value: keyData.calorieCount.toLocaleString("en"),
          icon: hot,
        },
        {
          id: 2,
          name: "proteinCount",
          value: keyData.proteinCount,
          icon: meat,
        },
        {
          id: 3,
          name: "carbohydrateCount",
          value: keyData.carbohydrateCount,
          icon: apple,
        },
        {
          id: 4,
          name: "lipidCount",
          value: keyData.lipidCount,
          icon: burger,
        },
      ],
    };
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
        day: GetDay(session.day),
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

/**
 * Retrieves the performance data for a given user ID.
 *
 * @param {number} id - The ID of the user.
 * @return {Promise<Array>} A promise that resolves to an array of performance data.
 * Each item in the array contains the following properties:
 * - value: The value of the performance data.
 * - kind: The kind of performance data (mapped from the original kind ID).
 * @throws {Error} If there is an error during the fetch request or parsing the response.
 */
const getPerformance = async (id) => {
  try {
    const response = await fetch(`${url}:${port}/user/${id}/performance`);
    const { data: dataResponse } = await response.json();
    const { data } = dataResponse;

    const performance = data.map((item) => {
      return {
        ...item,
        kind: NumberToKind(item.kind),
        // kind: kind[item.kind],
      };
    });

    return performance;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export { getUser, getActivity, getAverageSessions, getPerformance };
