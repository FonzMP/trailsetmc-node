import { userConstants } from "../_constants/user.constants";

export default function userReducer(
  state = { loggedIn: false, user: {} },
  action
) {
  switch (action.type) {
    case userConstants.AWAITING_SIGNUP:
      return { ...state };
    case userConstants.USER_SIGNED_UP:
      return (state = { loggedIn: true, user: action.payload, error: "" });

    default:
      return state;
  }
}
