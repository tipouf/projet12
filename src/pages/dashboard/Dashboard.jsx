import { useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ApiContext } from "../../providers/useContext";
import { Activity, AverageSessions } from "../../components";
import "./Dashboard.scss";

const Dashboard = () => {
  const { id } = useParams();
  const { setId, user } = useContext(ApiContext);

  useEffect(() => {
    setId(id);
  }, [id, setId]);

  return (
    <div className="dashboard">
      <div className="dashboard__user">
        <div>
          <h1>
            Bonjour <span className="dashboard__user__name">{user?.firstName}</span>
          </h1>
        </div>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </div>

      <div className="dashboard__activity">
        <div className="dashboard__activity__graph">
          <div className="dashboard__activity__graph__chart">
            <Link to={`/user/${id}/activity`}>
              <Activity />
            </Link>
          </div>
          <div className="dashboard__activity__graph__stats">
            <div className="dashboard__activity__graph__stats--card">
              <Link to={`/user/${id}/average-sessions`}>
            <AverageSessions />
              </Link>
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
