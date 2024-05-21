import "./Layout.scss";
import PropsTypes from "prop-types";

const Layout = ({ children }) => {
  return <div className="Layout">{children}</div>;
};

Layout.propTypes = {
  children: PropsTypes.node.isRequired,
};

export default Layout;
