import React from "react";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { mount } from "enzyme";
import configureStore from "redux-mock-store";
import sinon from "sinon";
import Home from "../../src/Containers/Home.jsx";
import { UserService } from "../../src/Services/user.js";
import UserFactory from "../../tests/factories/user.js";

const mockStore = configureStore([thunk]);

describe("My Connected React-Redux Component", () => {
  let store;
  let component;
  beforeEach(() => {
    Object.defineProperty(window, "matchMedia", {
      value: () => {
        return {
          matches: false,
          addListener: () => {},
          removeListener: () => {},
        };
      },
    });
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
    sinon.stub(UserService, "fetchUsersFromEndPoint").returns({
      data: [UserFactory.createUser(), UserFactory.createUser()],
      paginationInfo: {
        currentPage: 1,
        nextPage: 2,
        hasNextPage: true,
        hasPrevPage: false,
        perPage: 30,
      },
    });
    component = mount(
      <Provider store={store}>
        <Home />
      </Provider>
    );
  });

  it("should render with given state from Redux store", () => {
    expect(component).toMatchSnapshot();
  });
});
