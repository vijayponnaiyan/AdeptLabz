import { createRoot } from "react-dom/client";
import UserContextProvider from "./Hooks/Contex/UseContexProvider.jsx";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <UserContextProvider>
    <App />
  </UserContextProvider>
);
