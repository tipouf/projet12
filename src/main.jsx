import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./global.scss";
import { ApiProvider } from "./providers/fetchApi";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ApiProvider>
      <App />
    </ApiProvider>
  </BrowserRouter>
);
