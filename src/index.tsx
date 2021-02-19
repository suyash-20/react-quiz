import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import store from "./functional/store";
import * as actions from "./functional/actionTypes";

import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

//Redux logic

store.dispatch({
  type: actions.BEGIN_QUIZ,
  payload: {
    description: "Started the Quiz",
  },
});

store.dispatch({
  type: actions.NEXT_QUESTION,
  payload: {
    description: "Moved to next question",
  },
});
