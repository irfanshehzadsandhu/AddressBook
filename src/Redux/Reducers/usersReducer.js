import {
  FETCHING_USERS_BEGIN,
  FETCHED_USERS_SUCCESSFULLY,
  FETCHING_USERS_FAILURE,
  SET_NATIONALITY,
  DISPLAY_MODAL,
  HIDE_MODAL,
} from "../Actions/usersAction";

const initialState = {
  usersList: [],
  loading: false,
  error: null,
  nationality: "us",
  page: 1,
  offset: 30,
  selectedUser: null,
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
    case SET_NATIONALITY:
      return {
        ...state,
        usersList: [],
        nationality: action.payload.nationality,
      };
    case DISPLAY_MODAL:
      return {
        ...state,
        allowModalToDisplay: action.payload,
      };
    case HIDE_MODAL:
      return {
        ...state,
        allowModalToDisplay: action.payload,
      };
    default:
      return state;
  }
}

export default userReducer;
