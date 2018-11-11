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
    case userConstants.AWAITING_LOGIN:
      return { ...state };
    case userConstants.USER_LOGGED_IN:
      return { loggedIn: true, user: action.payload };
    case userConstants.LOGOUT_USER:
      return { loggedIn: false, user: {} };

    default:
      return state;
  }
}
