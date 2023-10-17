/* @refresh reload */
import "@/styles/global.css";
import { render } from "solid-js/web";

import Routes from "./Routes";

const root = document.getElementById("root");

render(() => <Routes />, root!);
