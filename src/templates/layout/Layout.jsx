import "./Layout.scss";
import PropsTypes from "prop-types";
import { Header, SideMenu } from "../../components";
const Layout = ({ children }) => {
  return <div className="Layout">
    <Header />
    <SideMenu />
    {children}</div>;
};

Layout.propTypes = {
  children: PropsTypes.node.isRequired,
};

export default Layout;