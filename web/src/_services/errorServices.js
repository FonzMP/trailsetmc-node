import { errorConstants } from "../_constants/error.constants";

// const url = process.env.REACT_APP_SERVER_URL;

export const errorServices = {
  clearError
};

function clearError() {
  return dispatch => {
    dispatch({ type: errorConstants.CLEAR_ERROR });
  };
}
