import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import Auth0ProviderWithHistory from "./auth/auth0ProviderWithHistory";
import { store } from "./store/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Auth0ProviderWithHistory>
        <Provider store={store}>
          <App />
        </Provider>
      </Auth0ProviderWithHistory>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
