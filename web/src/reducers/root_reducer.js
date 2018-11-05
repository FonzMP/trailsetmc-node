import { combineReducers } from "redux";
import manageUsers from "./user_reducer";
import managerErrors from "./error_reducer";

const rootReducer = combineReducers({
  user: manageUsers,
  error: managerErrors
});

export default rootReducer;
