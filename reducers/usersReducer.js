import {
  FETCHING_USERS_BEGIN,
  FETCHED_USERS_SUCCESSFULLY,
  FETCHING_USERS_FAILURE,
} from "../actions/usersAction";

const initialState = {
  usersList: [],
  loading: false,
  error: null,
  nationality: "us",
};
function userReducer(state = initialState, action) {
  switch (action.type) {
    case FETCHING_USERS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCHED_USERS_SUCCESSFULLY:
      return {
        ...state,
        loading: false,
        usersList: state.usersList.concat(action.payload.users),
      };
    case FETCHING_USERS_FAILURE:
      return {
        ...state,
        usersList: [],
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
}

export default userReducer;
