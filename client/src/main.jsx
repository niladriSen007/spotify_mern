import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="font-roboto-slab">
    <Provider store={store}>
      <App />
    </Provider>
  </div>
);
