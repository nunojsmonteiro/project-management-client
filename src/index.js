import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AuthProviderWrapper } from "./context/auth.context"; // <== IMPORT
import { BrowserRouter as Router } from "react-router-dom";
 
const root = ReactDOM.createRoot(document.getElementById("root"));
 
root.render(
  <React.StrictMode>
    <Router>
      <AuthProviderWrapper>      {/*  <== ADD  */}
        <App />
      </AuthProviderWrapper>     {/*  <== ADD  */}
    </Router>
  </React.StrictMode>
);
 
reportWebVitals();