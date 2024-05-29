import "./SideMenu.scss";
import { swim, strong, bike, yoga } from "../../assets";

const SideMenu = () => {
  return (
    <div className="SideMenu">
      <div className="menu">
        <div className="square">
          <img src={yoga} alt="yoga" />
        </div>
        <div className="square">
          <img src={swim} alt="swim" />
        </div>
        <div className="square">
          <img src={bike} alt="bike" />
        </div>
        <div className="square">
          <img src={strong} alt="strong" />
        </div>
      </div>
      <div className="copyright">Copyright, SportSee 2024</div>
    </div>
  );
};

export default SideMenu;
