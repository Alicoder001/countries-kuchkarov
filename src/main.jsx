import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { UrlProvider } from "./Context/UseContext";
ReactDOM.createRoot(document.getElementById("root")).render(
	<UrlProvider>
		<App />
	</UrlProvider>
);
