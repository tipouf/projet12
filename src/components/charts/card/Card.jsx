import PropsTypes from "prop-types";

import "./Card.scss";

const Card = ({ keyData  }) => {

  return (
    <div className="card">
      <div className={`square ${keyData.name}`}>
        <img src={keyData.icon} alt="keyData.icon" />
      </div>
      { keyData.value ?
      <div className="card__text">
        <p>{keyData.value}{keyData.name === "calorieCount" ? "kCal" : "g"}</p>
        <p>
        {
          {
            calorieCount: "Calories",
            proteinCount: "Proteines",
            lipidCount: "Glucides",
            carbohydrateCount: "Lipides",
          }[keyData.name]
        }
      </p>
      </div>
       : <div className="card__text">Aucune data</div>
      }
    </div>
  );
};

Card.propTypes = {
  keyData: PropsTypes.object
};

export default Card;
