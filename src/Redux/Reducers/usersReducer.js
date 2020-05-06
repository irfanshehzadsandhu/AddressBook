import {
  FETCHING_USERS_BEGIN,
  FETCHED_USERS_SUCCESSFULLY,
  FETCHING_USERS_FAILURE,
  SET_NATIONALITY,
  SELECT_USER,
  UNSELECT_USER,
  CACHED_USER,
} from "../../Constants";
import { act } from "react-test-renderer";

const initialState = {
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
      let paginationInfo = action.payload.results.paginationInfo;
      return {
        ...state,
        paginationInfo,
        loading: false,
        usersList: state.usersList.concat(action.payload.results.data),
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
    case SELECT_USER:
      return {
        ...state,
        selectedUser: action.payload.user,
      };
    case UNSELECT_USER:
      return {
        ...state,
        selectedUser: null,
      };
    case CACHED_USER:
      return {
        ...state,
        cachedUsersList: action.payload.results,
      };
    default:
      return state;
  }
}

export default userReducer;
