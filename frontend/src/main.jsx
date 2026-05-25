import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import "./styles/index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// Testing alignment

// import React from "react";
// import ReactDOM from "react-dom/client";

// import "./styles/index.css";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <div
//     style={{
//       width: "100vw",
//       minHeight: "100vh",
//       background: "red",
//     }}
//   >
//     <div
//       style={{
//         maxWidth: "1200px",
//         margin: "0 auto",
//         background: "blue",
//         color: "white",
//         padding: "40px",
//         fontSize: "48px",
//       }}
//     >
//       PURE HTML TEST
//     </div>
//   </div>
// );