import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
// import { createStore, applyMiddleware } from "redux";
// import rootReducer from "./store/reducers";
import { Provider } from "react-redux";
// import thunk from "redux-thunk";
import { PersistGate } from "redux-persist/integration/react";
import configureStore from "./store/configureStore";

// const store = createStore(rootReducer, applyMiddleware(thunk));
const { store, persistor } = configureStore();
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
