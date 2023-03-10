import React from "react";
import ReactDOM from "react-dom";
import {App} from "./App"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./contexts/AuthContext"



ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
    <BrowserRouter>
    <App/>
    </BrowserRouter>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
