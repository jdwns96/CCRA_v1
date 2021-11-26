import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

// React-router-dom
import { BrowserRouter } from "react-router-dom";

// Redux
import { Provider } from "react-redux";
import store from "@store";

// emtion
import { ThemeProvider } from "@emotion/react";
import Theme from "@styles/Theme";
import GlobalStyle from "@styles/Global";

import App from "@pages/App";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={Theme}>
        <BrowserRouter>
          <GlobalStyle />
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root"),
);

reportWebVitals();
