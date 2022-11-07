import React from "react";
import { render } from "react-dom";
import Router from "./components/Router"
import "../src/css/style.css";
import App from "./components/App";

render(<Router />, document.querySelector("#main"));
