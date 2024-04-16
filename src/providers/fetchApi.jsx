import { createContext, useState, useEffect, useMemo } from "react";
import propstype from "prop-types";

const ApiContext = createContext();


const url = "https://localhost";
const port = 3000;

const ApiProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [data1, setData1] = useState(null);
  const [data2, setData2] = useState(null);

  useEffect(() => {
    fetch(`${url}:${port}/users`)
      .then((response) => response.json())
      .then((data) => setUser(data));

    fetch(`${url}:${port}/posts`)
      .then((response) => response.json())
      .then((data) => setData1(data));

    fetch(`${url}:${port}/comments`)
      .then((response) => response.json())
      .then((data) => setData2(data));
  }, []);

  return (
    <ApiContext.Provider value={useMemo(() => ({ user, data1, data2 }), [user, data1, data2])}>
      {children}
    </ApiContext.Provider>
  );
};

ApiProvider.propTypes = {
  children: propstype.node.isRequired,
};

export { ApiContext, ApiProvider };