import { useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ApiContext } from "../../providers/useContext";
import { Activity, AverageSessions, RadarChart, Score } from "../../components";
import { apple, burger, hot, meat } from "../../assets/index.js";
import "./Dashboard.scss";

const Dashboard = () => {
  const { id } = useParams();
  const { setId, user } = useContext(ApiContext);

  useEffect(() => {
    setId(id);
    console.log("user", user);
  }, [id, setId, user]);

  return (
    <div className="dashboard">
      <div className="dashboard__user">
        <h1>
          Bonjour&nbsp;
          <span className="dashboard__user__name">{user?.firstName}</span>
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
              <Link to={`/user/${id}/radar`}>
                <RadarChart />
              </Link>
            </div>
            <div className="dashboard__activity__graph__stats--card">
              <Score todayScore={user?.todayScore} />
            </div>
          </div>
        </div>
        <div className="dashboard__activity__stats">
          <div className="dashboard__activity__stats--card">
            <div className="dashboard__activity__stats--card__template">
              <div className="square">
                <img src={apple} alt="apple" />
              </div>
              <div className="dashboard__activity__stats--card__template__text">
                <p>Proteines</p>
                <p>Proteines</p>
              </div>
            </div>
          </div>
          <div className="dashboard__activity__stats--card">
          <div className="dashboard__activity__stats--card__template">
              <div className="square">
                <img src={apple} alt="apple" />
              </div>
              <div className="dashboard__activity__stats--card__template__text">
                <p>Proteines</p>
                <p>Proteines</p>
              </div>
            </div>
          </div>
          <div className="dashboard__activity__stats--card">
          <div className="dashboard__activity__stats--card__template">
              <div className="square">
                <img src={apple} alt="apple" />
              </div>
              <div className="dashboard__activity__stats--card__template__text">
                <p>Proteines</p>
                <p>Proteines</p>
              </div>
            </div>
          </div>
          <div className="dashboard__activity__stats--card">
          <div className="dashboard__activity__stats--card__template">
              <div className="square">
                <img src={apple} alt="apple" />
              </div>
              <div className="dashboard__activity__stats--card__template__text">
                <p>Proteines</p>
                <p>Proteines</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
