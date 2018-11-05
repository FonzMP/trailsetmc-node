import { userConstants } from "../_constants/user.constants";

const url = process.env.REACT_APP_SERVER_URL;

export const userServices = {
  signupUser
};

function signupUser(user) {
  return dispatch => {
    dispatch({ type: userConstants.AWAITING_SIGNUP });
    let body = JSON.stringify({
      user: { user }
    });
    return fetch(`${url}/signup`, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: body
    }).then(response => {
      console.log(response);
    });
  };
}
