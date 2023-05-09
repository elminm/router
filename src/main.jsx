import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "react-crud-icons/dist/css/react-crud-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
