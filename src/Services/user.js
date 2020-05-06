import usersLibrary from "../Config";
import PaginatedConfig from "../Utils/paginationConfig.js";
import PaginatedData from "../Utils/paginatedData.js";
import User from "../Entities/user.js";
import { TOTAL_RECORDS } from "../Constants";
export class UserService {
  static async fetchUsersFromEndPoint(page, offset, nationality) {
    const fields = "id,name,email,login,picture,phone,cell,location";
    const res = await fetch(
      usersLibrary.libraryEndPoint +
        "?page=" +
        page +
        "&results=" +
        offset +
        "&nat=" +
        nationality +
        "&inc=" +
        fields
    );
    const json = await res.json();
    const paginatedData = new PaginatedData(
      new PaginatedConfig(page, offset),
      TOTAL_RECORDS
    );
    json.results.map((result) => {
      paginatedData.addItem(User.createFromObj(result));
    });
    return paginatedData.paginatedItems();
  }
}
