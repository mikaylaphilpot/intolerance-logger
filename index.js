import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import "./logger_style.css";

import App from "./logger";

const root = createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
        <App />
    </StrictMode>
);
