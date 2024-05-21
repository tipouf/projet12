import "./App.scss";
import { Layout } from "./templates";
import AllRoutes from "./routes/Route";

import { Header, SideMenu } from "./components";

export default function App() {
  return (
    <div className="App">
      <Header />
      <div className="divider">
        <SideMenu />
        <Layout>
          <AllRoutes />
        </Layout>
      </div>
    </div>
  );
}
