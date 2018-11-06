import { userConstants } from "../_constants/user.constants";
import { errorConstants } from "../_constants/error.constants";

const url = process.env.REACT_APP_SERVER_URL;

export const userServices = {
  signupUser,
  loginUser
};

function signupUser(user) {
  return dispatch => {
    dispatch({ type: userConstants.AWAITING_SIGNUP });
    let body = JSON.stringify({
      user
    });
    return fetch(`${url}/signup`, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: body
    })
      .then(response => {
        return response.json();
      })
      .then(user => {
        if (user.error) {
          dispatch({
            type: errorConstants.NEW_ERROR,
            payload: user.error.message
          });
        } else {
          dispatch({ type: userConstants.USER_SIGNED_UP, payload: user });
        }
      });
  };
}

function loginUser(user) {
  return dispatch => {
    dispatch({ type: userConstants.AWAITING_LOGIN });
    let body = JSON.stringify({
      user
    });
    return fetch(`${url}/login`, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: body
    })
      .then(response => {
        return response.json();
      })
      .then(user => {
        if (user.error) {
          dispatch({
            type: errorConstants.NEW_ERROR,
            payload: user.error.message
          });
        } else {
          dispatch({ type: userConstants.USER_LOGGED_IN, payload: user });
        }
      });
  };
}
