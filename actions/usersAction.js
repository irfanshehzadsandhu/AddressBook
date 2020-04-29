export const FETCHING_USERS_BEGIN = "FETCHING_USERS_BEGIN";
export const FETCHED_USERS_SUCCESSFULLY = "FETCHED_USERS_SUCCESSFULLY";
export const FETCHING_USERS_FAILURE = "FETCHING_USERS_FAILURE";

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

export function fetchUsers(page, offset, nationality) {
  return (dispatch) => {
    console.log(page);
    return fetch(
      "https://randomuser.me/api/?nat=" +
        nationality +
        "&&page=" +
        page +
        "&results=" +
        offset
    )
      .then((res) => res.json())
      .then((json) => {
        dispatch(fetchedUsersSuccessfully(json.results));
        return json.results;
      })
      .catch((error) => dispatch(fetchingUsersFailure(error)));
  };
}
