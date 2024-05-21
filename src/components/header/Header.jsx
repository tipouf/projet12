import "./Header.scss";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { ApiContext } from "../../providers/useContext";

const Header = () => {
  const [user, setUser] = useState(12);
  const [mocked, setMocked] = useState(true);
  
  const { mock, setMock } = useContext(ApiContext);

  useEffect(() => {
    setMock(mocked);
  }, [mock, setMock, mocked]);

  const onChange = () => setUser(user === 12 ? 18 : 12);

  const changeMock = () => setMocked(!mocked);
  

  return (
    <div className="header">
      <button onClick={changeMock}>
      <img src={logo} alt="logo" />
      </button>
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
