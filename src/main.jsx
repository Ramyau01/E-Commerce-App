import "./index.css";

import { createRoot } from "react-dom/client";

import { Provider } from "react-redux";
import { store } from "./store";

import { AppContextProvider } from "./pages/AppContext.jsx";

import App from "./App.jsx";
createRoot(document.getElementById("root")).render(
  <>
    <Provider store={store}>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </Provider>
  </>
);
