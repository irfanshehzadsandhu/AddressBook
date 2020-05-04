import { fetchUsersFromEndPoint } from "../../services/user.js";
import regeneratorRuntime from "regenerator-runtime";
export const FETCHING_USERS_BEGIN = "FETCHING_USERS_BEGIN";
export const FETCHED_USERS_SUCCESSFULLY = "FETCHED_USERS_SUCCESSFULLY";
export const FETCHING_USERS_FAILURE = "FETCHING_USERS_FAILURE";
export const SET_NATIONALITY = "SET_NATIONALITY";
export const DISPLAY_MODAL = "DISPLAY_MODAL";
export const HIDE_MODAL = "HIDE_MODAL";

export const fetchingUsersBegin = () => ({
  type: FETCHING_USERS_BEGIN,
});

export const fetchedUsersSuccessfully = (users) => ({
  type: FETCHED_USERS_SUCCESSFULLY,
  payload: { users },
});

export const fetchingUsersFailure = (error) => ({
  type: FETCHING_USERS_FAILURE,
  payload: { error },
});

export const setNationality = (nationality) => ({
  type: SET_NATIONALITY,
  payload: { nationality },
});

export const displayModal = () => ({
  type: DISPLAY_MODAL,
  payload: true,
});

export const hideModal = () => ({
  type: HIDE_MODAL,
  payload: false,
});

export function fetchUsers(page, offset, nationality) {
  return async (dispatch) => {
    try {
      const results = await fetchUsersFromEndPoint(page, offset, nationality);
      dispatch(fetchedUsersSuccessfully(results));
      return results;
    } catch (error) {
      dispatch(fetchingUsersFailure(error));
    }
  };
}
