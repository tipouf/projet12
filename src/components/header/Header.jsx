import "./Header.scss";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";



const Header = () => {
  const [user, setUser] = useState(12);

  const onChange = () => setUser(user === 12 ? 18 : 12);

  return (
    <div className="header">
      <img src={logo} alt="logo" />
      <nav className="nav">
        <Link to={`/user/${user}`} onClick={onChange}>Accueil</Link>
        <Link to="/profil">Profil</Link>
        <Link to="/settings">Réglage</Link>
        <Link to="/communiversity">Communauté</Link>
      </nav>
    </div>
  );
};

export default Header;
