import { USERS_LIBRARY_URL } from "react-native-dotenv";
import regeneratorRuntime from "regenerator-runtime";
export async function fetchUsersFromEndPoint(page, offset, nationality) {
  const res = await fetch(
    USERS_LIBRARY_URL +
      "/?nat=" +
      nationality +
      "&&page=" +
      page +
      "&results=" +
      offset
  );
  const json = await res.json();
  return json.results;
}
