import { apple, burger, hot, meat } from "../assets/index.js";

class FormatData {

  constructor(data) {
    this.data = data;

    if (!this.data) {
      throw new Error("No data");
    }
  }

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

  FormatAverageSessionsData() {
    const averageSessions = this.data.sessions.map((session) => {
      return {
        ...session,
        day: "LMMJVSD"[session.day - 1],
      };
    });

    return averageSessions;
  }

  FormatPerformanceData() {
    const { data: dataResponse } = this.data;

    const performance = dataResponse.reverse().map((item) => {
      return {
        ...item,
        kind: ["Cardio", "Energie", "Endurance", "Force", "Vitesse", "Intensite"][item.kind - 1],
      };
    });
    return performance;
  }
}

export default FormatData;

