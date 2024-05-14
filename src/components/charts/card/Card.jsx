import PropsTypes from "prop-types";

import "./Card.scss";

const Card = ({ keyData: { name, value, icon } }) => {

  return (
    <>
      <div className={`square ${name}`}>
        <img src={icon} alt="keyData.icon" />
      </div>
      <div className="dashboard__activity__stats--card__text">
        <p>{value} {name === "calorieCount" ? "kCal" : "g"}</p>
        <p>
        {
          {
            calorieCount: "Calories",
            proteinCount: "Proteines",
            lipidCount: "Glucides",
            carbohydrateCount: "Lipides",
          }[name]
        }
      </p>
      </div>
    </>
  );
};

Card.propTypes = {
  keyData: PropsTypes.exact({
    name: PropsTypes.string.isRequired,
    value: PropsTypes.number.isRequired,
    icon: PropsTypes.string.isRequired,
  }).isRequired,
};

export default Card;
