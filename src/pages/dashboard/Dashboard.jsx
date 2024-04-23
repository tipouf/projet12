import React from "react";
import "./Dashboard.scss";

const dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard__user">
        <div className="dashboard__user--name">Bonjour Thomas</div>
      </div>

      <div className="dashboard__activity">
        <div className="dashboard__activity__graph">
          <div className="dashboard__activity__graph__chart">
            <h1>Charts</h1>
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

export default dashboard;
