import { apple, burger, hot, meat } from "../assets/index.js";

class FormatData {
  /**
   * Constructs a new instance of the class with the given data.
   * @param {object} data - The data to be assigned to the instance's `data` property.
   */
  constructor(data) {
    this.data = data;
  }

  /**
   * Formats the user data into a specific format.
   *
   * @return {Object} The formatted user data.
   */
  FormatUserData() {
    const { userInfos, keyData, todayScore } = this.data;
    const score = todayScore ?? this.data.score;
    return {
      ...userInfos,
      score,
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
  }

  /**
   * Formats the activity data by mapping over the sessions and returning a new array of objects.
   * Each object in the new array contains the session data with the day formatted as a two-digit number.
   *
   * @return {Array} An array of objects with the formatted session data.
   */
  FormatActivityData() {
    const { sessions } = this.data;

    return sessions.map((session) => {
      return {
        ...session,
        day:
          new Date(session.day).getDate() < 10
            ? new Date(session.day).toLocaleDateString().slice(1, 2)
            : new Date(session.day).toLocaleDateString().slice(0, 2),
      };
    });
  }

  /**
   * Formats the average sessions data by mapping over the sessions and returning a new array of objects.
   * Each object in the new array contains the session data with the day formatted.
   *
   * @return {Array} An array of objects with the formatted session data.
   */
  FormatAverageSessionsData() {
    const averageSessions = this.data.sessions.map((session) => {
      return {
        ...session,
        day: "LMMJVSD"[session.day - 1],
      };
    });

    return averageSessions;
  }

  /**
   * Formats the performance data by reversing the order of the dataResponse array and mapping each item to a new object.
   * Each new object contains the original item data along with the corresponding kind value.
   * The kind value is determined by mapping the item.kind value to an array of strings.
   *
   * @return {Array} An array of objects representing the formatted performance data.
   */
  FormatPerformanceData() {
    const { data: dataResponse } = this.data;

    const performance = dataResponse.map((item) => {
      return {
        ...item,
        kind: [
          "Cardio",
          "Energie",
          "Endurance",
          "Force",
          "Vitesse",
          "Intensite",
        ][item.kind - 1],
      };
    }).reverse();
    return performance;
  }
}

export default FormatData;
