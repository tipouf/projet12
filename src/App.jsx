import "./App.scss";
import { Layout } from "./templates";
import AllRoutes from "./routes/Route";

export default function App() {
  return (
    <Layout>
      <AllRoutes />
    </Layout>
  );
}
