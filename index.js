import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
//import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import "bootstrap/dist/css/bootstrap.min.css";
import registerServiceWorker, {
  cacheFetchCalls
} from "./registerServiceWorker";
import "./index.css";
import App from "./App";
import allReducers from "./Reducers/index";

//const loggerMiddleware = createLogger();
const store = createStore(
  allReducers,
  applyMiddleware(thunkMiddleware)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
cacheFetchCalls();
