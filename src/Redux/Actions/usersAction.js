import { UserService } from "../../Services/user.js";
import {
  FETCHING_USERS_BEGIN,
  FETCHED_USERS_SUCCESSFULLY,
  FETCHING_USERS_FAILURE,
  SET_NATIONALITY,
  SELECT_USER,
  UNSELECT_USER,
} from "../../Constants";

export const fetchingUsersBegin = () => ({
  type: FETCHING_USERS_BEGIN,
});

export const fetchedUsersSuccessfully = (results) => ({
  type: FETCHED_USERS_SUCCESSFULLY,
  payload: { results },
});

export const fetchingUsersFailure = (error) => ({
  type: FETCHING_USERS_FAILURE,
  payload: { error },
});

export const setNationality = (nationality) => ({
  type: SET_NATIONALITY,
  payload: { nationality },
});

export const selectUser = (user) => ({
  type: SELECT_USER,
  payload: { user },
});

export const unSelectUser = () => ({
  type: UNSELECT_USER,
  payload: null,
});

export function fetchUsers(page, offset, nationality) {
  return async (dispatch) => {
    try {
      const results = await UserService.fetchUsersFromEndPoint(
        page,
        offset,
        nationality
      );
      dispatch(fetchedUsersSuccessfully(results));
      return results;
    } catch (error) {
      dispatch(fetchingUsersFailure(error));
    }
  };
}
