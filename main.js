import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { userList } from "./actions/actions";
import App from "./App.jsx";
import AddressBook from "./reducers/reducers";
const store = createStore(AddressBook);
const rootElement = document.getElementById("app");
store.dispatch(userList());
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  rootElement
);
