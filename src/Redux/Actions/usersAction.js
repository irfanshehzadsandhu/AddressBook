import { UserService } from "../../Services/user.js";
import {
  FETCHING_USERS_BEGIN,
  FETCHED_USERS_SUCCESSFULLY,
  FETCHING_USERS_FAILURE,
  SET_NATIONALITY,
  SELECT_USER,
  UNSELECT_USER,
  CACHED_USER,
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

export const cachedUsers = (results) => ({
  type: CACHED_USER,
  payload: { results },
});

export function fetchUsers() {
  return async (dispatch, getState) => {
    let results;
    const state = getState();
    const { nationality, paginationInfo } = state.users;
    try {
      if (state.cachedUsersList == null) {
        results = await UserService.fetchUsersFromEndPoint(
          paginationInfo.nextPage,
          paginationInfo.perPage,
          nationality
        );
      } else {
        results = state.cachedUsersList;
        dispatch(cachedUsers(await getNextUsers(paginationInfo, nationality)));
      }
      dispatch(fetchedUsersSuccessfully(results));
    } catch (error) {
      dispatch(fetchingUsersFailure(error));
    }
  };
}

const getNextUsers = async (paginationInfo, nationality) => {
  const results = await UserService.fetchUsersFromEndPoint(
    paginationInfo.nextPage + 1,
    paginationInfo.perPage,
    nationality
  );
  return results;
};
