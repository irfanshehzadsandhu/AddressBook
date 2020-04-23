import { combineReducers } from "redux";
import { USER_LIST } from "../actions/actions";

function users(state = [], action) {
  switch (action.type) {
    case USER_LIST:
      return { state, list: action.list };
    default:
      return state;
  }
}
const AddressBook = combineReducers({
  users,
});
export default AddressBook;
