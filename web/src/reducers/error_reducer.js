import { errorConstants } from "../_constants/error.constants";

export default function userReducer(state = { error: "" }, action) {
  switch (action.type) {
    case errorConstants.NEW_ERROR:
      return (state = { error: action.payload });
    case errorConstants.CLEAR_ERROR:
      return (state = { error: "" });

    default:
      return state;
  }
}
