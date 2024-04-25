import { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { ApiContext } from "../../providers/useContext";
import { DailyActivity } from "../../components";
import "./Dashboard.scss";

const Dashboard = () => {
  const { id } = useParams();
  const { setId, user } = useContext(ApiContext);

  const  [userData, setUserData] = useState(null);



  useEffect(() => {
    setId(id);
    setUserData(user);
  }, [id, setId, user]);

  return (
    <div className="dashboard">
      <div className="dashboard__user">
        <div className="dashboard__user--name">
          <h1>{userData?.data.userInfos.firstName} {userData?.data.userInfos.lastName}</h1>
      </div>
      </div>

      <div className="dashboard__activity">
        <div className="dashboard__activity__graph">
          <div className="dashboard__activity__graph__chart">
            <DailyActivity />
          </div>
          <div className="dashboard__activity__graph__stats">
            <div className="dashboard__activity__graph__stats--card">
              <h1>Stats</h1>
            </div>
            <div className="dashboard__activity__graph__stats--card">
              <h1>Stats</h1>
            </div>
            <div className="dashboard__activity__graph__stats--card">
              <h1>Stats</h1>
            </div>
          </div>
        </div>
        <div className="dashboard__activity__stats">
          <div className="dashboard__activity__stats--card">
            <h1>Stats</h1>
          </div>
          <div className="dashboard__activity__stats--card">
            <h1>Stats</h1>
          </div>
          <div className="dashboard__activity__stats--card">
            <h1>Stats</h1>
          </div>
          <div className="dashboard__activity__stats--card">
            <h1>Stats</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
