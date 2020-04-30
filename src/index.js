import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import App from "./App.jsx";
import AddressBook from "./redux/reducers";
const store = createStore(AddressBook, applyMiddleware(thunk));
const rootElement = document.getElementById("app");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  rootElement
);
