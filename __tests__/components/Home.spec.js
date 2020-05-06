import React from "react";
import { Provider } from "react-redux";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";

import Home from "../../src/Containers/Home.jsx";

const mockStore = configureStore([]);

describe("My Connected React-Redux Component", () => {
  let store;
  let component;
  beforeEach(() => {
    store = mockStore({
      users: {
        usersList: [],
        loading: false,
        error: null,
        nationality: "us",
        paginationInfo: {
          currentPage: 0,
          nextPage: 1,
          hasNextPage: true,
          hasPrevPage: false,
          perPage: 30,
        },
        selectedUser: null,
        cachedUsersList: [],
      },
    });
    store.dispatch = jest.fn();
    component = renderer.create(
      <Provider store={store}>
        <Home />
      </Provider>
    );
  });

  it("should render with given state from Redux store", () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
