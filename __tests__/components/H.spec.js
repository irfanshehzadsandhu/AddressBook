import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";

import Home from "../../components/Home.jsx";

const mockStore = configureStore([]);

describe("My Connected React-Redux Component", () => {
  let store;
  let component;
  const initialState = {
    users: {
      usersList: [],
      loading: false,
      error: null,
      nationality: "us",
    },
  };
  beforeEach(() => {
    store = mockStore({
      myState: initialState,
    });

    component = renderer.create(
      <Provider store={store}>
        <Home />
      </Provider>
    );
  });

  it("should render with given state from Redux store", () => {});

  it("should dispatch an action on mount", () => {});
});
