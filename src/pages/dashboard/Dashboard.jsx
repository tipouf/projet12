import { useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ApiContext } from "../../providers/useContext";
import Error404 from "../error/Error404";
import {
  Activity,
  AverageSessions,
  RadarChart,
  Score,
  Card,
} from "../../components";
import "./Dashboard.scss";

const Dashboard = () => {
  const { id } = useParams();
  const { setId, user, mock } = useContext(ApiContext);

  useEffect(() => setId(id), [id, setId]);

  const keyData = user?.keyData;

  if (!user) return <Error404 />;

  return (
    <div className="dashboard">
      <div className="dashboard__user">
        <h1>
          Bonjour{" "}
          <span className="dashboard__user__name">{user?.firstName}</span>
          {mock && <span className="dashboard__user__mocked">(mocked)</span>}
        </h1>
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
              <Link to={`/user/${id}/performance`}>
                <RadarChart />
              </Link>
            </div>
            <div className="dashboard__activity__graph__stats--card">
              {user?.score ? (
                <Score todayScore={user?.score} />
              ) : (
                <p>Aucune donnée</p>
              )}
            </div>
          </div>
        </div>
        <div className="dashboard__activity__stats">
          {keyData?.map((keyData) => (
            <Card keyData={keyData} key={keyData.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
