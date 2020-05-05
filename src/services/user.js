import usersLibrary from "../config";
export async function fetchUsersFromEndPoint(page, offset, nationality) {
  const res = await fetch(
    usersLibrary.libraryEndPoint +
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
