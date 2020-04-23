import {
  FETCHING_USERS_BEGIN,
  FETCHED_USERS_SUCCESSFULLY,
  FETCHING_USERS_FAILURE,
} from "../actions/usersAction";

const initialState = {
  usersList: [],
  loading: false,
  error: null,
};
function userReducer(state = initialState, action) {
  switch (action.type) {
    case FETCHING_USERS_BEGIN:
      return {
        usersList: [],
        loading: true,
        error: null,
      };
    case FETCHED_USERS_SUCCESSFULLY:
      return {
        usersList: action.payload.users,
        loading: false,
        error: null,
      };
    case FETCHING_USERS_FAILURE:
      return {
        usersList: [],
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
}

export default userReducer;
