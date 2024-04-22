import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <img src="src/assets/logo.png" alt="logo" />
      <nav className="nav">
        <Link to="/">Accueil</Link>
        <Link to="/profil">Profil</Link>
        <Link to="/settings">Réglage</Link>
        <Link to="/communiversity">Communauté</Link>
      </nav>
    </div>
  );
};

export default Header;