import { userConstants } from "../_constants/user.constants";
import { errorConstants } from "../_constants/error.constants";

const url = process.env.REACT_APP_SERVER_URL;

export const userServices = {
  signupUser,
  loginUser,
  setUser,
  logoutUser
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
          localStorage.setItem("userId", user._id);
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
        console.log(user);
        if (user.error) {
          dispatch({
            type: errorConstants.NEW_ERROR,
            payload: user.error
          });
        } else {
          localStorage.setItem("userId", user._id);
          dispatch({ type: userConstants.USER_LOGGED_IN, payload: user });
        }
      });
  };
}

function setUser(id) {
  return dispatch => {
    dispatch({ type: userConstants.AWAITING_LOGIN });
    return fetch(`${url}/user/${id}`)
      .then(response => {
        return response.json();
      })
      .then(user => {
        dispatch({ type: userConstants.USER_LOGGED_IN, payload: user });
      });
  };
}

function logoutUser() {
  localStorage.removeItem("userId");
  return dispatch => {
    dispatch({ type: userConstants.LOGOUT_USER });
  };
}
