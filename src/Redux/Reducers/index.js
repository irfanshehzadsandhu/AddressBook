import { combineReducers } from "redux";
import users from "./usersReducer";
const AddressBook = combineReducers({
  users,
});
export default AddressBook;
