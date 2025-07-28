import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.css";
import reportWebVitals from "./reportWebVitals";
import Layout from "./RootLevel/layout";
import Banner from "./components/banner/banner";
import { Homepage, Homepage2 } from "./data/homepage";
import Navigation from "./components/nav/nav";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navigation />
    <Layout />
    <Banner props={Homepage} />
    <Banner props={Homepage2} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
